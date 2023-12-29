const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { resolve } = require('path');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.

  // add additional rule to load files under libs
  const rules = config.module.rules.find((rule) =>
    Array.isArray(rule.oneOf)
  )?.oneOf;
  if (rules) {
    rules.push({
      test: /\.(mjs|[jt]sx?)$/,
      exclude: /node_modules/,
      use: {
        loader: require.resolve('@nx/webpack/src/utils/web-babel-loader.js'),
        options: {
          presets: [
            [
              '@nx/react/babel',
              {
                runtime: 'automatic',
              },
            ],
          ],
        },
      },
    });
  }

  if (!config.resolve) {
    config.resolve = {};
  }
  if (!config.resolve.plugins) {
    config.resolve.plugins = [];
  }
  const extensions = ['.ts', '.tsx', '.mjs', '.js', '.jsx'];
  const tsConfigPath = resolve('tsconfig.json');
  config.resolve.plugins.push(
    new TsconfigPathsPlugin({
      configFile: tsConfigPath,
      extensions,
    })
  );

  config.resolve.symlinks = true;
  return config;
};

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@nx/react/plugins/storybook',
    '@chromatic-com/storybook',
    // '@storybook/addon-react-native-web'
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-native$': 'react-native-web',
      };
      config.resolve.extensions = [
        '.web.tsx',
        '.web.ts',
        '.web.jsx',
        '.web.js',
        ...(config.resolve.extensions ?? []),
      ];
      config.module ??= {};
      config.module.rules ??= [];
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        include: /react-native-vector-icons/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'automatic' }],
          ],
        },
      });

    }
    return config;
  },


  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs

/**
 * This script is used to patch the `@nrwl/expo` package to work with EAS Build.
 * It is run as a eas-build-post-install script in the `package.json` of expo app.
 * It is executed as `node tools/scripts/nx-eas-build-post-install.mjs <workspace root> <project root>`
 * It will create a symlink from the project's node_modules to the workspace's node_modules.
 */

import { ensureNodeModulesSymlink } from '@nrwl/expo/src/utils/ensure-node-modules-symlink.js';

const [workspaceRoot, projectRoot] = process.argv.slice(2);
if (!workspaceRoot) {
  throw new Error('Missing workspace root');
}
if (!projectRoot) {
  throw new Error('Missing project root');
}
ensureNodeModulesSymlink(projectRoot, workspaceRoot);
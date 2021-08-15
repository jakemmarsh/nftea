const path = require('path');

function augmentResolve(config) {
  const returnConfig = Object.assign({}, config);

  returnConfig.resolve.extensions.push('.js', '.ts', '.tsx');

  returnConfig.resolve.modules.push(path.resolve(__dirname), 'node_modules');

  return returnConfig;
}

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config = augmentResolve(config);

    return config;
  },
};

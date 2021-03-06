const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => ({
  plugins: [
    new TerserPlugin({ parallel: true, terserOptions: { ecma: 6 } }),
    new CompressionWebpackPlugin(),
  ]
});
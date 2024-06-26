const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'main.js'),
  plugins: [
    new HtmlWebpackPlugin({ template: './src/public/index.html' }),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        rentApp: 'rentApp@http://localhost:3001/remoteEntry.js',
        saleApp: 'saleApp@http://localhost:3002/remoteEntry.js',
      },
    }),
  ],
};

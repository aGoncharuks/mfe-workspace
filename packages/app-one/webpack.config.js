const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8083,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'AppOne',
        filename:
          'remoteEntry.js',
        exposes: {
          './bootstrap': './src/bootstrap.js',
        },
      }
    )
  ],
};

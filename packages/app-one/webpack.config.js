const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
	output: {
		uniqueName: "appOne",
		publicPath: "auto"
	},
  mode: 'development',
  devServer: {
    port: 4100,
		contentBase: path.join(__dirname, 'dist')
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
            ['@babel/preset-react', { "runtime": "automatic" }]
          ],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'appOne',
        exposes: {
          './entryModule': './src/bootstrap.js',
        },
				filename: "remoteEntry.js",
				shared: {
					"react": { singleton: true },
					"react-dom": { singleton: true }
				},
      }
    )
  ],
};

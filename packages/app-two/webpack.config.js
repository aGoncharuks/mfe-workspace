const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "appTwo",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
			name: "appTwo",
			filename: "remoteEntry.js",
			exposes: {
				'./entryModule': './src/app/entry/entry.module.ts',
			},
			shared: {
				"@angular/core": { singleton: true },
				"@angular/common": { singleton: true },
				"@angular/common/http": { singleton: true },
				"@angular/router": { singleton: true },

				...sharedMappings.getDescriptors()
			}
    }),
    sharedMappings.getPlugin()
  ],
};

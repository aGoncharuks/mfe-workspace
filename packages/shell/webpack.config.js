const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "shell",
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
			remotes: {
				"appOne": "appOne@http://localhost:4100/remoteEntry.js",
				"appTwo": "appTwo@http://localhost:4200/remoteEntry.js",
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

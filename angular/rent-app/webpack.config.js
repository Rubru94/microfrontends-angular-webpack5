const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "rentApp",
      library: { type: "var", name: "rentApp" },
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./src/app/app.component.ts",
      },
      shared: [
        {
          "@angular/core": {
            eager: true,
            singleton: true,
            strictVersion: true,
            requiredVersion: "^17.3.0",
          },
        },
        {
          "@angular/common": {
            eager: true,
            singleton: true,
            strictVersion: true,
            requiredVersion: "^17.3.0",
          },
        },
        {
          "@angular/router": {
            eager: true,
            singleton: true,
            strictVersion: true,
            requiredVersion: "^17.3.0",
          },
        },
      ],
    }),
  ],
};

const webpack = require("webpack");
const { version } = require("./package.json");

module.exports = {
  publicPath: "/retrospective/",

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(version)
      })
    ]
  }
};

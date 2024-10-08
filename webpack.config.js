const path = require("path")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserJSPlugin = require("terser-webpack-plugin")
const CSSMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")

const mode = process.env.NODE_ENV || "development"
const prod = mode === "production"

module.exports = {
  entry: {
    bundle: ["./src/main.js"],
  },
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte/src/runtime"),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
    conditionNames: ["svelte", "browser"],
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        // exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: !prod,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: {
      index: "index.html",
    },
    hot: true,
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new CSSMinimizerWebpackPlugin()],
  },
  devtool: prod ? false : "source-map",
}

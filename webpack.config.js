/* eslint-disable func-names */
/* eslint-disable consistent-return */
const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const merge = require("webpack-merge");
const webpack = require("webpack");
const fs = require("fs");
const pug = require("./webpack/pug");
const devserver = require("./webpack/devserver");
const sass = require("./webpack/sass");
const extractCSS = require("./webpack/css.extract");
const css = require("./webpack/css");
const sourceMap = require("./webpack/sourceMap");
const images = require("./webpack/images");
const filesLocations = require("./webpack/filesLocations");
const fonts = require("./webpack/fonts");
const babel = require("./webpack/babel");
const favicon = require("./webpack/favicon");

const PATHS = {
  source: path.join(__dirname, "dev"),
  build: path.join(__dirname, "docs"),
  pack: path.join(__dirname, "pack")
};

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = "pug";
    const html = new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(
        __dirname,
        `${templateDir}/${name}/${name}.${extension}`
      ),
      inject: true
    });
    return html;
  });
}

const htmlPages = generateHtmlPlugins("./dev/pages");

const commonDev = merge([
  {
    entry: {
      main: `${PATHS.source}/app/main.js`
    },
    output: {
      path: PATHS.build,
      filename: "./js/[name].js?[hash]"
    },
    plugins: [
      new webpack.ProvidePlugin({
        Promise: "es6-promise-promise"
      }),
      new Dotenv(),
      new WriteFilePlugin(),
      new CopyPlugin(filesLocations)
    ].concat(htmlPages),
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false
        })
      ]
    }
  },
  pug(),
  images(),
  fonts(),
  babel()
]);

const commonProd = merge([
  {
    entry: {
      main: `${PATHS.source}/app/main.js`
    },
    output: {
      path: PATHS.build,
      filename: "./js/[name].js?[hash]"
    },
    plugins: [
      new webpack.ProvidePlugin({
        Promise: "es6-promise-promise"
      }),
      new Dotenv(),
      new WriteFilePlugin(),
      new CopyPlugin(filesLocations)
    ].concat(htmlPages),

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  },
  pug(),
  images(),
  fonts(),
  babel()
]);

const commonPack = merge([
  {
    plugins: [
      new CopyPlugin([
        {
          from: "**/*.js",
          context: path.resolve(__dirname, "dev", "components/ds-modal"),
          to: `${PATHS.pack}/src/`
        },
        {
          from: "**/*.scss",
          context: path.resolve(__dirname, "dev", "components/ds-modal"),
          to: `${PATHS.pack}/src/`
        },
        {
          from: "main.css",
          context: path.resolve(__dirname, "docs", "css"),
          to: `${PATHS.pack}/dist/dsModal.min.css`
        },
        {
          from: "main.js",
          context: path.resolve(__dirname, "docs", "js"),
          to: `${PATHS.pack}/dist/dsModal.min.js`
        },
        {
          from: "LICENSE",
          to: `${PATHS.pack}/`
        },
        {
          from: "package-pack.json",
          to: `${PATHS.pack}/package.json`
        },
        {
          from: "README.md",
          to: `${PATHS.pack}`
        }
      ])
    ]
  }
]);

module.exports = function(env, argv) {
  if (argv.mode === "development") {
    return merge([commonDev, devserver(), sass(), css(), sourceMap()]);
  }
  if (argv.mode === "production") {
    return merge([commonProd, extractCSS(), commonPack]);
  }
};
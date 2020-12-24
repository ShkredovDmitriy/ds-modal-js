const paths = require('./_lib/_paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {

  mode: 'development',
  entry: [paths.src + '/app/main.ts'],
  output: {
    path: paths.dist,
    filename: 'js/main.min.js?[hash]',
  },

  // Start a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: paths.dist,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    host: '0.0.0.0',
    compress: false,
  }, 

  plugins: [

    // Transform pug to html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: paths.src + '/pages/index.pug',
      inject: true,
    }),
  ],

  module: {
    rules: [

      // Typescript loader
      {
        test: /\.ts$/,
        exclude: [/node_modules/, /config/],
        use: 'ts-loader',
      },

      // Babel
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // Inject css into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer()
                ],
              },
              sourceMap: true
            }
          },
          { 
            loader: 'sass-loader',
            options: { sourceMap: true }
          },
        ],
      },

      // Transform pug to html
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },

      // copy image files to build folder
      {
        test: /\.(jpg|jpeg|png|svg)$/, type: 'asset/resource'
      },

      // Inline fonts
      {
        test: /\.(woff|woff2)$/, type: 'asset/inline'
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
}

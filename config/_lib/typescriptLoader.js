// Typescript loader
module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: [/node_modules/, /config/],
          use: 'ts-loader',
        },
      ],
    },
  }
}

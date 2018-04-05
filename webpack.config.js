const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './challenge_1/client/app.jsx'),
  output: {
    filename: 'mini-1-bundle.js',
    path: path.resolve(__dirname, './challenge_1/public/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
          },
        },
      },
    ],
  },
};

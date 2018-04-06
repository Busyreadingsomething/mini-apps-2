const path = require('path');

const common = {
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
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};

const mini1 = {
  entry: path.resolve(__dirname, './challenge_1/client/app.jsx'),
  output: {
    filename: 'mini-1-bundle.js',
    path: path.resolve(__dirname, './challenge_1/public/dist'),
  },
};

const mini2 = {
  entry: path.resolve(__dirname, './challenge_2/client/app.jsx'),
  output: {
    filename: 'mini-2-bundle.js',
    path: path.resolve(__dirname, './challenge_2/public/dist'),
  },
};

const mini3 = {
  entry: path.resolve(__dirname, './challenge_3/client/app.jsx'),
  output: {
    filename: 'mini-3-bundle.js',
    path: path.resolve(__dirname, './challenge_3/public/dist'),
  },
};

module.exports = [
  Object.assign({}, common, mini1),
  Object.assign({}, common, mini2),
  Object.assign({}, common, mini3),
];

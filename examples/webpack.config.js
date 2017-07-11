const path = require('path');

const config = {
  entry: './examples/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../examples_build'),
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'cp-loader',
          options: {
            match: true,
          },
        },
      },
    ],
  },
  resolveLoader: {
    alias: {
      'cp-loader': path.join(__dirname, '../src', 'index.js'),
    },
  },
};

module.exports = config;

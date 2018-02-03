const path = require('path');

module.exports = {
  entry: './src/web.js',
  output: {
    filename: 'web.js',
    path: path.resolve(__dirname, 'js')
  },
  module: {
	  loaders: [{
		  test: /\.js$/,
		  exclude: /node_modules/,
		  loader: 'babel-loader'
	  }]
  }
};
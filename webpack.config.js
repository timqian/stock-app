module.exports = {
  // devtool: 'inline-source-map',
  entry: './index.js',
  output: {
      path: __dirname,
      filename: 'bundle.js'
  },
  // output: {
  //   path: __dirname + '/build',
  //   filename: 'bundle.js',
  //   chunkFilename: '[id].chunk.js',
  //   publicPath: '/__build__/'
  // },
  module: {
      loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
      ]
  }
};

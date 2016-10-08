module.exports = {
  context: __dirname + '/app',
  entry: './js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: /app/,
        loaders: [
          'style',
          'css',
          'postcss-loader',
          'sass?outputStyle=expanded',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api' : ''},
        secure: false,
      }
    }
  }
}

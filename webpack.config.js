module.exports = {
  context: __dirname + '/app',
  entry: './js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: /app/,
        use: [
          'style',
          'css',
          'postcss-loader',
          'sass?outputStyle=expanded',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel',
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

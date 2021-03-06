let webpack = require('webpack')

module.exports = {
  context: __dirname + '/app',
  entry: './js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
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
        loader: 'babel-loader',
        use: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
    ],
  },
}

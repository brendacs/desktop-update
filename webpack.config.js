module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      }
    ]
  },
}
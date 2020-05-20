module.exports = {
  mode: 'production',
  entry: {
    app: './src/client/app.js'
  },
  output: {
    path: `${__dirname}/public/app`,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  }
};

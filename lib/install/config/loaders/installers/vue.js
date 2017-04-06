const babelConfig = require('./babel.js')

module.exports = {
  test: /.vue$/,
  loader: 'vue-loader',
  options: {
    loaders: {
      js: 'babel-loader?' + JSON.stringify(babelConfig.options),
      scss: 'vue-style-loader!css-loader!sass-loader',
      sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
    }
  }
}

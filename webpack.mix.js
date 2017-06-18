const {mix} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//Resolving paths to avoid relative routes
mix.webpackConfig({
  resolve: {
    alias: {
      'src': path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  }
});

//Disable uglify, it's having some issues minifying ES6 features
mix.setPublicPath('dist')

mix
  .js('src/app.js', 'dist')
  .extract([
    'easy-requests', 'lodash'
  ], 'dist/vendor.js')
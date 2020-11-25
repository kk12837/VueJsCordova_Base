let mix = require('laravel-mix');

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


/**
 * 設定以 json loader 載入 json file
 */
mix.webpackConfig({
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json-loader'
        }]
    }
});

/**
 * //TODO: Try sourcemap and bundling js css
 * 將 assets 封裝, 匯出至 'public' 文件夾
 */

    mix.js('app.js', 'www/js/app.js')
        .sass('assets/sass/app.scss', 'www/css/app.css')
        .minify('www/css/app.css')
        .sourceMaps()

;


mix.options({
    processCssUrls: false // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
});

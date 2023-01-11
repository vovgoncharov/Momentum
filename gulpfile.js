const { src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const del = require('del');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

const clean = () => del('dist');

const html = () => src(['index.html']).pipe(dest('dist'));

const css = () => src(['css/**/*']).pipe(dest('dist/css'));

const assets = () => src(['assets/**/*']).pipe(dest('dist/assets'));

const js = () =>
  browserify('js/script.js')
    .transform('babelify', { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(source('script.js'))
    .pipe(dest('dist/js'));

const copy = series([html, css, assets]);
const build = series([clean, copy, js]);

exports.default = build;

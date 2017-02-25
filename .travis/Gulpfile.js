'use strict';

let gulp = require('gulp');
let babel = require('gulp-babel');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
let merge = require ('merge-stream');

const dist = 'testable/';

const babelConfig = {
    'plugins': ['babel-plugin-transform-es2015-modules-commonjs']
};

gulp.task('clean', () => {
    return gulp.src(dist, { read: false })
        .pipe(clean());
});

gulp.task('default', ['clean'], () => {

    let core = gulp.src(['lib/**/*.js'], { base: './', })
        .pipe(sourcemaps.init())
        .pipe(babel(babelConfig))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist));

    return merge(core);
});

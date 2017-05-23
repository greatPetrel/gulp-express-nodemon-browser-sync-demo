'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var browserify = require('gulp-browserify');
//var browserify = require('browserify');
var source = require('vinyl-source-stream');
var less=require('gulp-less');

var devjs='dev/js/*.js';
var devless='dev/less/*.less';

gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:5000",
        files: ["public/**/*.*"],
        browser: "google chrome",
        port: 7000,
    });
});
gulp.task('nodemon', function (cb) {

    var started = false;

    return nodemon({
        script: 'app.js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});

//browserify 任务
// browserify Basic usage
gulp.task('js', function() {
   // Single entry point to browserify
    gulp.src(['dev/js/main.js'])
        .pipe(browserify())
        .pipe(gulp.dest('public/js'))
    // return browserify(_fromjs)
    //     // .bundle()
    //     //Pass desired output filename to vinyl-source-stream
    //     .pipe(source('bundle.js'))
    //     // Start piping stream to tasks!
    //     .pipe(gulp.dest(_toJs));
   // console.log('js任务');
});




'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var browserify = require('gulp-browserify');
var less=require('gulp-less');

var exec=require('gulp-browserify').exec;


//默认开发位置
var devjs='dev/js/*.js';
var devless='dev/less/*.less';
var devpage='';
//默认任务
gulp.task('default', ["less",'js','browser-sync'], function () {
    gulp.watch(devjs,['js']);
    gulp.watch(devless,['less']);
});

gulp.task('browser-sync', ['nodemon'], function() {
//gulp.task('browser-sync', function() {
	browserSync.init(null, {
        //可以使用静态或者代理服务器（proxy）
		//proxy: "http://localhost:4000",
        files: ["public/**/*.*"],
        //browser: ["google chrome", "firefox","opera","iexplore"],
        //server:{baseDir:"public/"},
        browser: ["google chrome"],
        //ghostMode: { clicks: true, scroll: true },
        //port: 7000,

	});
});

//nodemon 任   务，需要用的app.js
gulp.task('nodemon',function (cb) {
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

// browserify Basic usage
gulp.task('js', function() {
    // Single entry point to browserify
    var _fromjs="dev/js/main.js";
    var _toJs='./public/js/page';
    gulp.src(_fromjs)
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest(_toJs))
        // .pipe(browserSync.reload({stream: true}));
    console.log('js任务');
});


//less任务
gulp.task('less',function () {
    // body...
    gulp.src('dev/less/*.less')
      .pipe(less())
      .pipe(gulp.dest('public/css'))
      // .pipe(browserSync.reload({public}));
    console.log('less 编译 成功');
});


//gulp.run()已经弃用
var gulp = require('gulp');
var browserify = require('gulp-browserify');

//less任务
// gulp.task('less',function () {
//     // body...
//     gulp.src('dev/less/*.less')
//       .pipe(less())
//       .pipe(gulp.dest('public/css'))
//       // .pipe(browserSync.reload({public}));
//     console.log('less 编译 成功less 编译 成功less 编译 成功less 编译 成功');
// });

//上面是i原始写法，想要输入方法必须要export
module.exports=function () {
  // body...
  return function () {
    // body...
       gulp.src(['../../dev/js/main.js'])
        .pipe(browserify())
        .pipe(gulp.dest('../../public/js'))
  }
}

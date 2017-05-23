var gulp = require('gulp');
var less=require('gulp-less');

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
    gulp.src('dev/less/*.less')
      .pipe(less())
      .pipe(gulp.dest('public/css'));
  }
}

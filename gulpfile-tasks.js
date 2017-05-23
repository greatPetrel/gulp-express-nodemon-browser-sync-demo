var gulp = require('./gulp')([
    'browserify',
    // 'compass',
    // 'images',
    // 'open',
    // 'watch',
    // 'serve'
    'less'
]);

// gulp.task('build', ['browserify', 'compass', 'images']);
// gulp.task('default', ['build', 'watch', 'serve', 'open']);

gulp.task('default',['less','browserify']);
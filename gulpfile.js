var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: './examples/',
    livereload: true
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./examples/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./examples/css'))
      .pipe(connect.reload());
});

gulp.task('livereload', function (){
  gulp.src('./example/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./**/*.scss', ['sass']);
  gulp.watch('./example/**/*', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass']);
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var fs = require('fs');
var path = require('path');
var glob = require('glob');

gulp.task('connect', function(){
  connect.server({
    root: './examples/',
    livereload: true
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', ['sass-includes'], function () {
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
  gulp.watch(['./**/*.scss', '!./**/_all.scss'], ['sass']);
  gulp.watch('./example/**/*', ['livereload']);
});


// Hack the ability to import directories in Sass
// Find any _all.scss files and write @import statements
// for all other *.scss files in the same directory
//
// Import the whole directory with @import "somedir/all";
gulp.task('sass-includes', function (callback) {
	var all = '_all.scss';
	glob('./**/' + all, function (error, files) {
		files.forEach(function (allFile) {
			// Add a banner to warn users
			fs.writeFileSync(allFile, '/** This is a dynamically generated file **/\n\n');

			var directory = path.dirname(allFile);
			var partials = fs.readdirSync(directory).filter(function (file) {
				return (
					// Exclude the dynamically generated file
					file !== all &&
					// Only include _*.scss files
					path.basename(file).substring(0, 1) === '_' &&
					path.extname(file) === '.scss'
				);
			});

			// Append import statements for each partial
			partials.forEach(function (partial) {
				fs.appendFileSync(allFile, '@import "' + partial + '";\n');
			});
		});
	});

	callback();
});

gulp.task('default', ['connect', 'watch', 'sass']);
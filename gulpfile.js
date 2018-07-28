var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	gulp.src('../2muchcoffee/css/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function(){
	gulp.watch('../2muchcoffee/css/*.scss', ['sass'])
});

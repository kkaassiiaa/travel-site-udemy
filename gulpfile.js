const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const cssnested = require('postcss-nested');

gulp.task('default', () => {
  console.log('udalo sie :)');
});

gulp.task('html', () => {
  console.log('something special ');
});

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssvars, cssnested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {
  watch('./app/index.html', () => {
    gulp.start('html');
  });
  
  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles');
  });
});
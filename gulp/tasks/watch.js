const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create(); // nie importujemy całego skryptu tylko jedną metodę

gulp.task('watch', () => {

  browserSync.init({
    notify: false, // usuwa okienko z prawego górnego rogu mówiące o dokonanej modyfikacji
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', () => {
    browserSync.reload();
  });
  
  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', () => {
    gulp.start('scriptsRefresh');
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], () => {
  browserSync.reload();
});
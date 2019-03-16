const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create(); 

gulp.task('previewDist', () => {
  browserSync.init({
    notify: false, // usuwa okienko z prawego górnego rogu mówiące o dokonanej modyfikacji
    server: {
      baseDir: "docs" // przeważnie nazywa się ten folder dist (wszędzie w tym)
    }
  });
});

gulp.task('deleteDistFolder', ['icons'], () => {
  return del("./docs");
})

gulp.task('copyGeneralFiles', ['deleteDistFolder'], () => {
  const pathsToCopy = [
    './app/**/*',
    '!./app/inde.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp/',
    '!./app/temp/**',
  ]
  return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./docs'))
});

gulp.task('optimazeImages', ['deleteDistFolder'], () => {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))  
  .pipe(gulp.dest('./docs/assets/images'));
})

gulp.task('useminTrigger', ['deleteDistFolder'], () => {
  gulp.start('usemin');
})

gulp.task('usemin', ['styles', 'scripts'], () => {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [() => {return rev()}, () => {return cssnano()}],
      js:[() =>{return rev()}, () => {return uglify()}]
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimazeImages', 'useminTrigger']);
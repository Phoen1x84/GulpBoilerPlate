var gulp = require('gulp');
var less = require('gulp-less');
var path =  require('path');

var basePaths = {
  src: 'src/';
  dist: 'dist/'
};

var paths = {
  styles: {
    src: basePaths + 'css/';
    dist: basePaths + 'css/'
  }
};
// notes passing variables does not work!
gulp.task('default', function (options) {
  return gulp.src(styles.src + '*.less')
    .pipe(less({
      paths: [ path.join(__dirname, './src/', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css'));
    
});

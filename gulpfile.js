var gulp = require('gulp');
var file = require('vinyl');
var watch = require('gulp-watch');
var less = require('gulp-less');
var path =  require('path');
var concat = require('gulp-concat')


var runSequence = require('run-sequence');

// var basePaths = {
//   src: 'src/';
//   dist: 'dist/'
// };
//
// var paths = {
//   styles: {
//     src: basePaths + 'css/';
//     dist: basePaths + 'css/'
//   }
// };

// notes passing variables does not work!

gulp.task('watch', function(){
  // watch .less files
  gulp.watch('./src/css/*.less', ['styles'])

  // watch .js files
  gulp.watch('./src/js/*.js', ['concat'])
})

// no longer required
// gulp.task('callback', function(cb){
//   watch('./src/css/*.less', function(){
//     gulp.src('./src/css/*.less')
//       .pipe(watch('./src/css/*.less'))
//       .on('end', cb);
//   });
// });

// less compiler
gulp.task('styles', function() {
  return gulp.src('./src/css/*.less')
  .pipe(less({
    paths: [path.join(__dirname, './src/css', 'includes')]
  }))
  .pipe(gulp.dest('./dist/css'));
});

// js concat
gulp.task('concat', function() {
  return gulp.src(['./src/js/**/*.js','./src/js/app.js'])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./dist/js'));
});

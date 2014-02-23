
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-spawn-mocha');

// run test
gulp.task('test', function () {
  gulp.src('./test/*.spec.js')
    .pipe(mocha())
    .on('error', function () {});
})

// restart server on files changes
gulp.task('develop', function () {
  nodemon({ script: 'server.js', ext: 'html js', ignore: [] })
    .on('restart', ['test'])
})

// gulp
gulp.task('default', ['develop', 'test']);
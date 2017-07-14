var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');
var gutil        = require('gulp-util');

var buildTask = function (cb) {
  gutil.env.type = 'prod';
  gulpSequence('clean', 'html', 'images', 'css', 'js', 'fonts', cb);
};

// gulp build -> build for prod
gulp.task('gulp:build', buildTask);
module.exports = buildTask;

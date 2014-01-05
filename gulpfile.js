var html2txt = require('./index');
var gulp = require('gulp');

gulp.task('default', function(){
  gulp.src('index.html')
    .pipe(html2txt(150)) // optional wordwrap value.
    .pipe(gulp.dest('dist'));
});

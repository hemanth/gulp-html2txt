# gulp-html2txt [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]
> Converts HTML to txt using [html-to-text](https://npmjs.org/package/html-to-text)

## Usage

First, install `gulp-html2txt` as a development dependency:

```shell
npm install --save-dev gulp-html2txt
```

Then, add it to your `gulpfile.js`:

```javascript
var html2txt = require('gulp-html2txt');

gulp.task('default', function(){
  gulp.src('index.html')
    .pipe(html2txt(150)) // optional wordwrap value.
    .pipe(gulp.dest('dist'));
});
```
The above will convert index.html to index.txt. 

[travis-url]: http://travis-ci.org/hemanth/gulp-html2txt
[travis-image]: https://secure.travis-ci.org/lazd/gulp-html2txt.png?branch=master
[npm-url]: https://npmjs.org/package/gulp-html2txt
[npm-image]: https://badge.fury.io/js/gulp-repl.png


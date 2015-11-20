'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var html2txt = require('./index');

it('should convert HTML to text', function (cb) {
        var stream = html2txt();

        stream.on('data', function (file) {
                assert.equal(file.relative, 'fixture.txt');
                assert.equal(file.contents.toString(), 'Hello World');
                cb();
        });

        stream.write(new gutil.File({
                path: 'fixture.html',
                contents: new Buffer('Hello World')
        }));
});
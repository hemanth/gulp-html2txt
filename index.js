'use strict';
var map = require('map-stream');
var es = require('event-stream');;
var gutil = require('gulp-util');
var html2txt = require('html-to-text');

module.exports = function(options) {
  options = options || {}
  
  return es.map(function (file, cb) {
    file.contents = new Buffer( html2txt.fromString( file.contents.toString(), options) );
    file.path = gutil.replaceExtension(file.path, '.txt');
    cb(null,file);
  });
};
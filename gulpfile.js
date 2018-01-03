var gulp = require('gulp'),
  options = require('./task-sets/sass-options.js');
require('sl-gt-sass-autoprefixer')(gulp, options);

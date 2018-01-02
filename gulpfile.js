var gulp = require('gulp'),
  options = {
    sassFolder: 'src',
    cssFolder: 'dist/css'
  }
require('sl-gt-sass-autoprefixer')(gulp, options);

var gulp = require('gulp'),
  options = {
    sassFolder: 'src/scss'
  }
require('sl-gt-sass-autoprefixer')(gulp, options);

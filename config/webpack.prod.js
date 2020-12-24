const { merge } = require('webpack-merge');
const modeProduction = require('./_lib/_modeProductions');     // webpack mode, entry and output points
const clearBuildFolder = require('./_lib/_clearBuildFolder');  // clear "build" folder for clear building
const typescriptLoader = require('./_lib/_typescriptLoader');  // transform ts to js, use babel, use uglify, export to main.min.js
const pugToHTMLLoader = require('./_lib/_pugToHTMLLoader');    // transform pug to html, export to index.html
const scssToCssLoader = require('./_lib/_scssToCssLoader');    // minimize styles, autoprefix styles, export to main.min.css
const copyStaticFiles = require('./_lib/_copyStaticFiles');    // copy images, fonts, from src to build

module.exports = env => {
  return merge([
    modeProduction(), 
    clearBuildFolder(),
    typescriptLoader(),
    pugToHTMLLoader(),
    copyStaticFiles(),
    scssToCssLoader()
  ]);
};
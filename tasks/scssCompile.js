// ============================================
// Task: SCSS Compilation
// ============================================
import browserSync from 'browser-sync';
import { dest, src, task } from 'gulp';
import scss from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import './loadEnv.js';
import { plugins } from './plugins.js';

task('scss', async () => {
  src('./src/**/*.scss', { allowEmpty: true }) // Source SCSS files
    .pipe(sourcemaps.init()) // Initialize sourcemaps
    .pipe(scss({ silenceDeprecations: ['legacy-js-api'] }).on('error', scss.logError)) // Compile SCSS
    .pipe(postcss(plugins)) // Apply PostCSS plugins
    .pipe(sourcemaps.write('.')) // Write sourcemaps
    .pipe(dest('./dist/css')) // Output compiled CSS
    .pipe(browserSync.stream()); // Stream changes
});

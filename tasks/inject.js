// ============================================
// Task: Inject CSS & JS into HTML
// ============================================

import browserSync from 'browser-sync';
import { dest, src, task } from 'gulp';
import inject from 'gulp-inject';

task('index', async () => {
  return src('./dist/index.html') // Target HTML file in the dist folder
    .pipe(
      inject(
        src('./dist/**/*.css', { read: false }), // Inject all CSS files into the HTML
        { ignorePath: 'dist', addRootSlash: false, removeTags: true }
      )
    )
    .pipe(
      inject(
        src('./dist/**/*.js', { read: false }), // Inject all JS files into the HTML
        { ignorePath: 'dist', addRootSlash: false, removeTags: true }
      )
    )
    .pipe(dest('./dist')) // Save the updated HTML file in dist folder
    .pipe(browserSync.stream()); // Trigger BrowserSync to reload the page
});

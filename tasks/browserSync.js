// ============================================
// Task: BrowserSync Server and File Watcher
// ============================================

import browserSync from 'browser-sync';
import dotenv from 'dotenv';
import { series, task, watch } from 'gulp';

dotenv.config(); // Load .env file contents into process.env

task('browser', async () => {
  // Initialize BrowserSync server
  browserSync.init({
    server: {
      baseDir: './dist', // Serve files from the dist directory
    },
    open: 'local', // Open the project in the browser
    port: process.env.PORT || 1000, // Use port from environment variable or default to 1000
    ui: { port: 2000 }, // Set the port for BrowserSync UI
    logPrefix: 'SASS Project', // Custom log prefix
    browser: [process.env.BROWSER || 'chrome'], // Open the project in specified browser or default to Chrome
  });

  // ============================================
  // Watchers: File Watching & Automatic Reloading
  // ============================================

  // Watch HTML files and run 'html' + 'index' tasks on change
  watch('./src/index.html', series('html', 'index'));
  // Watch SCSS files and run SCSS task
  watch('./src/scss/**/*.{scss,sass}', series('scss'));
  // Watch final HTML output and reload on change
  watch('./dist/index.html').on('change', browserSync.reload);
});

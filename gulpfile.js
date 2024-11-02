// ============================================
// Gulpfile Configuration for Task Automation
// ============================================

// Importing Gulp and Required Plugins
import { series, task } from 'gulp';

// Import task modules
import './tasks/browserSync.js';
import './tasks/htmlTemplate.js';
import './tasks/inject.js';
import './tasks/scssCompile.js';
import './tasks/watchers.js';

// ============================================
// Default Task: Running All Tasks Together
// ============================================

// This is the default task that runs when you execute gulp
task('default', series('html', 'index', 'scss', 'browser'));

import { task, watch, series } from 'gulp';
import browserSync from 'browser-sync';

task('watchers', async () => {
  watch('./src/index.html', series('html', 'index'));
  watch('./src/scss/**/*.{scss,sass}', series('scss'));
  watch('./src/less/**/*.less', series('less'));
  watch('./dist/index.html').on('change', browserSync.reload);
});

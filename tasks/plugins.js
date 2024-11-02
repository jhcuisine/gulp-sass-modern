import autoprefixer from 'autoprefixer';

export const plugins = [
  autoprefixer({
    env: process.env.NODE_ENV || 'production',
    cascade: process.env.AUTOPREFIXER_CASCADE === 'true',
    add: process.env.AUTOPREFIXER_ADD === 'true',
    remove: process.env.AUTOPREFIXER_REMOVE === 'true',
    supports: process.env.AUTOPREFIXER_SUPPORTS === 'true',
    flexbox: process.env.AUTOPREFIXER_FLEXBOX === 'true',
    grid: process.env.AUTOPREFIXER_GRID || false,
    overrideBrowserslist: [
      'last 100 versions',
      'ie >= 11',
      'not dead',
      'last 2 iOS versions',
      'last 2 Android versions',
    ],
  }),
];

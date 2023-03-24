const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync').create();
const livereload = require('gulp-livereload');
const reload      = browsersync.reload;

const paths = {
  css: {
    src: './assets/scss/**/*.scss',
    dest: './assets/css',
  },
};

/// vendors js ///
gulp.task('js_file', function () {
  return gulp.src(
    [
      'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      'node_modules/swiper/swiper-bundle.min.js',
      'node_modules/aos/dist/aos.js',
    ], { base: 'node_modules',"allowEmpty": true })
    .pipe(gulp.dest('./assets/js/vendors/'));
});

/// vendors css ///
gulp.task('css_file', function () {
  return gulp.src(
    [
      './node_modules/swiper/swiper.min.css',
      './node_modules/swiper/swiper-bundle.min.css',
      './node_modules/aos/dist/aos.css',
    ], { base: 'node_modules',"allowEmpty": true })
     .pipe(sass({
      }).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/vendors/'));
});

/// Style Task ///
gulp.task('scss', () => {
  return gulp
    .src(paths.css.src)
    .pipe(sass({
        //  outputStyle: 'compressed'
      }).on('error', sass.logError))
    .pipe(gulp.dest(paths.css.dest))
    .pipe(browsersync.stream())
    .pipe(livereload());
  done();
});

/// Browser Sync Task ///
gulp.task('browser-sync', async function (done) {
  browsersync.init({
    base: './',
    server: './',
    startPath: 'index.html',
    host: 'localhost',
    open: true,
    tunnel: false,
    
  });
   gulp.watch("./*.html").on("change", reload);
  // done();
}); 

/// Watch function ///
gulp.task(
  'default',
  gulp.series('css_file', 'js_file', 'scss', 'browser-sync', function () {
    gulp.watch(['./assets/scss/**/*.scss'], gulp.series('scss', 'js_file', 'css_file'));
    livereload.listen();
  }),
);

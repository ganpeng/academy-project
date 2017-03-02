const gulp = require('gulp')
const postcss = require('gulp-postcss')
const plumber = require('gulp-plumber')
const path = require('path')

// const cssSrcDir = path.join(__dirname, 'styles/src#<{(||)}>#*.css')
const cssSrcDir = path.join(__dirname, 'styles/src/*.css')
const cssDestDir = path.join(__dirname, 'styles/dist')

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'IOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1'
]


gulp.task('css', () => {
  return gulp.src(cssSrcDir)
    .pipe(plumber())
    .pipe(postcss([
      require('postcss-partial-import'),   // css import
      require('postcss-css-reset'),  //  css-reset
      require('precss'),  // 在postcss中能使用scss风格的用法
      require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),   // 自动添加浏览器前缀
      require('lost'),
      require('rucksack-css'),   // 响应式文字
      require('csswring')  // 压缩css文件
    ]))
    .pipe(plumber.stop())
    .pipe(gulp.dest(cssDestDir))
})


gulp.task('default', ['css'], () => {
  console.log('finished')
  // gulp.watch(cssSrcDir, ['css'])
  gulp.watch(path.join(__dirname, 'styles/src/**/*.css'), ['css'])
})

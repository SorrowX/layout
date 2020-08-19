const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

// 编译scss
gulp.task('css', function () {
    gulp.src('../src/styles/*.scss')
        .pipe(sass.sync({outputStyle: 'expanded'})) /* 嵌套输出方式 nested; 展开输出方式 expanded; 紧凑输出方式 compact; 压缩输出方式 compressed */
        .pipe(autoprefixer({
            browsers: ['ie > 9', 'last 2 versions'],
            cascade: false
        }))
        // .pipe(cssmin())
        .pipe(gulp.dest('../dist/styles'));
});

// 拷贝字体
gulp.task('fonts', function () {
    gulp.src('../src/styles/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'));
});

gulp.task('default', ['css', 'fonts']);

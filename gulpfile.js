const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
gulp.task('default',['babel'], () => {
    return gulp.watch(['./src/**/**.es', '!./src/public/*/*.es'],['babel'])
})
gulp.task('babel', () => {
    return gulp.src(['./src/**/**.es', '!./src/public/*/*.es'])
        .pipe($.babel({
            presets: [
                "latest",
                "stage-3"
            ]
        }))
        .pipe(gulp.dest('dist'));
})
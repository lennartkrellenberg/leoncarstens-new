const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
    // direct to scss file
    return gulp.src('./source/assets/scss/*.scss')
        //pass through sass compiler
        .pipe(sass().on('error', sass.logError))
        // save the compiled CSS
        .pipe(gulp.dest('./source/assets/css'))

        //stream changes to all browser
        .pipe(browserSync.stream());
}





async function browserwatch() {
    gulp.watch('./build/assets/css/*.css').on('change', browserSync.reload);
    gulp.watch('./build/**/*.html').on('change', browserSync.reload);
    gulp.watch('./build/*.html').on('change', browserSync.reload);
    gulp.watch('./build/assets/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./build/assets/img/**').on('change', browserSync.reload,);
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });
}











exports.style = style;
exports.browserwatch = browserwatch;
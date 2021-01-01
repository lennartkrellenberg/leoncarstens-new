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

function watch() {
    style();
    browserSync.init({
        server: {
            baseDir: './source'
        }
    });
    gulp.watch('./source/assets/scss/*.scss', style);
    gulp.watch('./source/**/*.html').on('change', browserSync.reload);
    gulp.watch('./source/*.html').on('change', browserSync.reload);
    gulp.watch('./source/assets/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./source/assets/img/**').on('change', browserSync.reload,);




}

function build() {
    gulp.src('./source/*.html').pipe(gulp.dest('./build'));
    gulp.src('./source/assets/js/**/*.js').pipe(gulp.dest('./build/assets/js'));
    gulp.src('./source/assets/img/*').pipe(gulp.dest('./build/assets/img'));
    gulp.src('./source/assets/scss/**/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./build/assets/css'))

    browserSync.init({
        server: {
            baseDir: './build'
        }
    });
}


exports.build = build;
exports.style = style;
exports.watch = watch;
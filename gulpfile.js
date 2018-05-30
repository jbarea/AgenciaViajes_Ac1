const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css');



function scripts() {
    return gulp.src('js/**/*.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

function styles() {
    return gulp.src('css/**/*.css')
        .pipe(concat('styles.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
}

gulp.task('default', ['browser', 'scripts', 'styles']);

gulp.task('browser', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('scripts', () => { scripts() });


gulp.task('styles', () => { styles() });

gulp.watch(['index.html']).on('change', () => {
    browserSync.reload();
    scripts();
});


gulp.watch(['js/**/*.js']).on('change', () => {
    browserSync.reload();
    scripts();
});

gulp.watch(['css/**/*.css']).on('change', () => {
    browserSync.reload();
    styles();
});
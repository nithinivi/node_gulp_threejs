const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
// const browserSync = requrie('browser-sync');

/*
  -- TOP LEVEL FUNCTIONS
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/

//Logs Message
gulp.task('message', function(){
    return console.log('Gulp is running...');
});

// Copy All HTML files
gulp.task('copyHtml', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imageMin', function(){
    return   gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

// Minify JS
gulp.task('minify', function(){
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Compile Sass
gulp.task('sass', function(){
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Scripts
gulp.task('scripts', function(){
    return gulp.src('src/js/*.js')
    //        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function(){
    browserSync.init({
        server:{
            baseDir: "./dist/"}
    })

    gulp.watch('src/sass/*.scss', gulp.series(['sass']));
    gulp.watch('src/images/*', gulp.series(['imageMin']));
    gulp.watch('src/js/*.js', gulp.series(['scripts'])).on('change', browserSync.reload);
    gulp.watch('src/*.html', gulp.series(['copyHtml'])).on('change', browserSync.reload);

});



gulp.task('default', gulp.series(['watch']));

// gulp.task('default', gulp.series(['message']));

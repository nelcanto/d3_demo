// var gulp = require('gulp'),
//     connect = require('gulp-connect'),
//     traceur =  require('gulp-traceur'),
//     sass = require('gulp-ruby-sass');
//     // connect = require('gulp-connect-php');


// gulp.task('connect', function(){
//     connect.server({
//         livereload: true,
//         port: 8005
//     });
// });


// gulp.task('reload', function(){
//     gulp.src('./dist/**/*.*')
//         .pipe(connect.reload());
// });

// gulp.task('sass', function(){
//         sass('./sass/*.scss')
//         .pipe(gulp.dest('dist/css'));
// });

// gulp.task('traceur', function(){
//     gulp.src('./scripts/*.js')
//     .pipe(traceur())
//     .pipe(gulp.dest('dist/scripts'));
// });

// gulp.task('watch', function(){
//     gulp.watch(['./sass/*.scss'], ['sass']);
//     gulp.watch(['./scripts/*.js'], ['traceur']);
//     gulp.watch(['./**/*.*'], ['reload']);

// });

// gulp.task('default', ['connect', 'traceur', 'watch', 'sass']);



/*php*/
var gulp = require('gulp'),
    // connect = require('gulp-connect'),
    traceur =  require('gulp-traceur'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect-php');


gulp.task('connect', function(){
    connect.server({
        livereload: true,
        port: 8005
    });
});


gulp.task('reload', function(){
    gulp.src('./dist/**/*.*')
        .pipe(connect.reload());
});

gulp.task('sass', function(){
        sass('./sass/*.scss')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('traceur', function(){
    gulp.src('./scripts/*.js')
    .pipe(traceur())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch', function(){
    gulp.watch(['./sass/*.scss'], ['sass']);
    gulp.watch(['./scripts/*.js'], ['traceur']);
    // gulp.watch(['./**/*.*'], ['reload']);

});

gulp.task('default', ['connect', 'traceur', 'watch', 'sass']);





// var gulp = require('gulp'),
//     php = require('gulp-connect-php'),
//     browserSync = require('browser-sync');

// var reload  = browserSync.reload;

// gulp.task('php', function() {
//     php.server({ port: 8010, keepalive: true});
// });
// gulp.task('browser-sync',['php'], function() {
//     browserSync({
//         proxy: '127.0.0.1:8010',
//         port: 8080,
//         open: true,
//         notify: false
//     });
// });

// gulp.task('default', ['browser-sync'], function () {
//     gulp.watch(['./**/*.*'], [reload]);
// });
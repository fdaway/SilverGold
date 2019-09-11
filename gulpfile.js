var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('src/sass/style.sass')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('src/css'))
});


gulp.task('watch', function() {
  gulp.watch('src/sass/*.sass', gulp.series('sass'));

});

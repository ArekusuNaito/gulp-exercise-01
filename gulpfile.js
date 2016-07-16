//##############################################################################
// Required
//##############################################################################

var gulp = require('gulp');
var uglify = require('gulp-uglify') //To minify stuff
var rename = require('gulp-rename') //This will rename our minified code to .min.js files


//##############################################################################
// Tasks
//##############################################################################

//This will look for every JS, uglify it and move it to a js/min folder
gulp.task('scripts', function()
{

  gulp.src(['js/**/*.js','!**/*.min.js'] )
    .pipe(rename(({suffix: '.min'})))
    .pipe(uglify())
    .pipe( gulp.dest('js/min') )
})

//##############################################################################
// Watch
//##############################################################################

gulp.task('watch',function()
{
  gulp.watch('js/**/*.js',['scripts'])
})


//##############################################################################
// Default Task
//##############################################################################
gulp.task('default', ['watch'])

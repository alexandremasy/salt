var gulp = require('gulp');
var watch = require('gulp-watch');


///////////////////////////////////////////////////////////////////

/**
 *  Task: Styles [dev]
 *  Build the sass files for development
 *
 *  @version 1.1
 *  @author Afelio - Alexandre Masy <a.masy@afelio.be>
 **/
gulp.task('styles.dev', function(){
  var sass = require('gulp-sass');
  var autoprefixer = require('gulp-autoprefixer');

  gulp.src(['src/styles/app.scss', 'src/styles/styleguide.scss'])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('build/statics/styles/'))
    .pipe(connect.reload())
    ;
});


//
//  Base on `scripts-to-rule-them-all`
//
//  scripts/bootstrap: is used solely for fulfilling dependencies of the project
//  scripts 
//

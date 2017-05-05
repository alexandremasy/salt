var gulp = require("gulp");
var exec = require('child_process').exec;


function e(cmd)
{
  return function()
  {
    exec(cmd, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      console.log(err);
    });
  }
}

gulp.task('tests', e('npm test'));
gulp.task('gists', e('sass --update gists:build --sourcemap=none --style=expanded'));

gulp.task('watch', function()
{
  // on change on test => launch the tests
  gulp.watch('test/**/*.scss', ['tests']);
  // on change on gists => build the gists
  gulp.watch('gists/**/*.scss', ['gists']);
  // on change on src => build the gists + launch the tests
  gulp.watch('src/**/*.scss', ['gists']);
});

gulp.task('default', ['watch']);

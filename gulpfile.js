var gulp = require("gulp");
var exec = require('child_process').exec;

gulp.task('tests', function(cb)
{
  exec('npm test', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('gists', function(cb)
{
  exec('sass --update gists:build --sourcemap=none --style=expanded', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('watch', function()
{
  // on change on test => launch the tests
  gulp.watch('test/**/*.scss', ['tests']);
  // on change on gists => build the gists
  gulp.watch('gists/**/*.scss', ['gists']);
  // on change on src => build the gists + launch the tests
  gulp.watch('src/**/*.scss', ['gists', 'tests']);
});

gulp.task('default', ['watch']);

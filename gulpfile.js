const { src, dest, watch, parallel } = require('gulp');
const exec = require('child_process').exec;

function e(cmd)
{
  return new Promise((resolve, reject) => {
    exec(cmd, function (err, stdout, stderr) {
      let r = {
        err: err,
        stdout: stdout,
        stderr: stderr
      };
      console.log(stdout);
      console.log(stderr);
      console.log(err);
      resolve(r);
    });
  });
}

function tests(){
  return e('sass --update tests:build --sourcemap=none --style=expanded');
}

function w(){
  // on change on gists => build the gists
  watch('tests/**/*.scss', tests);
  // on change on src => build the gists + launch the tests
  watch('src/**/*.scss', tests);
}

exports.default = tests
exports.watch = w

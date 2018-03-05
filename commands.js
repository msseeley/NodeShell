var fs = require('fs');

var actions={
  "pwd": function(arg) {
    process.stdout.write(process.cwd());
    process.stdout.write('\n:-) ');
  },
  "date": function(arg) {
    process.stdout.write(new Date().toString());
    process.stdout.write('\n:-) ');
  },
  "ls": function(arg) {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write('\n:-) ');
    });
  },
  "echo": function(arg) {
    process.stdout.write(arg);
    process.stdout.write('\n:-) ');
  },
  "cat": function (arg) {
    fs.readFile(arg, function(err, data) {
      if (err) {
        process.stdout.write('FILE NOT FOUND');
      } else {
        process.stdout.write(data + "\n");
      }
      process.stdout.write('\n:-) ');
    })
  },
  "head": function (arg) {
    fs.readFile(arg, function(err, data) {
      if (err) {
        process.stdout.write('FILE NOT FOUND');
      } else {
        var lines = data.toString().split("\n").slice(0, 5);
        process.stdout.write(lines.join("\n") + "\n");
      }
      process.stdout.write('\n:-) ');
    })
  },
  "tail": function (arg) {
    fs.readFile(arg, function(err, data) {
      if (err) {
        process.stdout.write('FILE NOT FOUND');
      } else {
        var lines = data.toString().split("\n");
        lines = lines.slice(-5);
        process.stdout.write(lines.join("\n") + "\n");
      }
      process.stdout.write('\n:-) ');
    })
  }
}

module.exports = actions;

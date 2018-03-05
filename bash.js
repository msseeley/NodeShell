var commands = require('./commands');

// console.log(process);
//console.log(Object.keys(process));

process.stdout.write('\n:-) ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmdLine = data.toString().trim().split(' '); // remove the newline
  var cmd = cmdLine[0];
  var args = cmdLine.slice(1).join(' ');

  //process.stdout.write('You typed: ' + cmd);
  if(commands[cmd]){
    commands[cmd](args);
  } else {
    if (cmd) {
      process.stdout.write('\nCOMMAND NOT FOUND!');
    }
    process.stdout.write('\n:-) ');
  }
});
process.cwd();

// console.log(process);
//console.log(Object.keys(process));

//Output a prompt
process.stdout.write('prompt > ');

var actions={
    "pwd": process.cwd, 
    "date": function (){return  new Date().toString()}
}

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  
  //process.stdout.write('You typed: ' + cmd);
  if(actions[cmd]){process.stdout.write(actions[cmd]());}


  process.stdout.write('\nprompt > ');

});
process.cwd();



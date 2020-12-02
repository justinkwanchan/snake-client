// W02D3 - Multiplayer Snake Game 🐍

const { connect } = require('./client.js');
console.log('Connecting ...');
connect();


/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      console.log('Disconnecting from server. Bye!');
      process.exit();
    }
  }
  
  stdin.on('data', handleUserInput);

  return stdin;
}

setupInput();

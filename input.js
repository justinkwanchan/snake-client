/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('Disconnecting from server. Bye!');
    process.exit();
  }
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', handleUserInput);

  return stdin;
}

module.exports = { setupInput };
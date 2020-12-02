// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = function(key) {
  switch (key) {
    case '\u0003':
      console.log('Disconnecting from server. Bye!');
      process.exit();
      break;
    case 'w':
      connection.write('Move: up');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case 'q':
      connection.write('Say: Nice');
      break;
    case 'e':
      connection.write('Say: Wow');
      break;
    case 'z':
      connection.write('Say: POG');
      break;
    case 'x':
      connection.write('Say: Yeet');
      break;
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', handleUserInput);

  return stdin;
}

module.exports = { setupInput };
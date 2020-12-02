// W02D3 - Connection module or client module
// Snake Initials

const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: Juj');
  });

  conn.on('data', (message) => {
    console.log(message);
  });

  return conn;
};

module.exports = { connect };
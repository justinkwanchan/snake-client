// W02D3 - Multiplayer Snake Game 🐍

const { connect } = require('./client');
const { setupInput } = require('./input')

console.log('Connecting ...');

setupInput(connect());
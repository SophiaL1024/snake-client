const { connect } = require('./client');

console.log("Connecting ...");
const conn = connect();
conn.on('data', (data) => {
  console.log(data);
})
conn.on('connect', () => {
  console.log("Successfully connected to game server");
  conn.write("Name: FL");
})
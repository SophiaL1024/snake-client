const { connect } = require('./client');
const { setupInput } = require('./input');
const{name}=require('./constants');

console.log("Connecting ...");
const conn = connect();
setupInput();
conn.on('data', (data) => {
  console.log(data);
})
conn.on('connect', () => {
  console.log("Successfully connected to game server");
  conn.write(`Name: ${name}`);

  // setTimeout(() => {
  //   connect().write("Move: up")
  // },
  //   1000);
  // setTimeout(() => {
  //   connect().write("Move: left")
  // },
  //   2000);
  // setTimeout(() => {
  //   connect().write("Move: down")
  // },
  //   3000);
  // setTimeout(() => {
  //   connect().write("Move: right")
  // },
  //   4000);
  // const timerId = setInterval(() => {
  //   connect().write("Move: up")
  // }, 500);
  // setTimeout(() => {
  //   clearInterval(timerId);
  // }, 5000);
})

// setupInput(connect()).on("data", handleUserInput);
setupInput(conn);
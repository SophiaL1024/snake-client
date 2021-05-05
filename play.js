const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
connect();
setupInput();
connect().on('data', (data) => {
  console.log(data);
})
connect().on('connect', () => {
  console.log("Successfully connected to game server");
  connect().write("Name: FL");

  setTimeout(() => {
    connect().write("Move: up")
  },
    1000);
  setTimeout(() => {
    connect().write("Move: left")
  },
    2000);
  setTimeout(() => {
    connect().write("Move: down")
  },
    3000);
  setTimeout(() => {
    connect().write("Move: right")
  },
    4000);
  const timerId = setInterval(() => {
    connect().write("Move: up")
  }, 500);
  setTimeout(() => {
    clearInterval(timerId);
  }, 5000);
})

setupInput().on("data", handleUserInput);
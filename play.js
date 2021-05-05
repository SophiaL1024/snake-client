const { connect } = require('./client');

console.log("Connecting ...");
const conn = connect();
conn.on('data', (data) => {
  console.log(data);
})
conn.on('connect', () => {
  console.log("Successfully connected to game server");
  conn.write("Name: FL");

  setTimeout(() => {
    conn.write("Move: up")
  },
    1000);
  setTimeout(() => {
    conn.write("Move: left")
  },
    2000);
  setTimeout(() => {
    conn.write("Move: down")
  },
    3000);
  setTimeout(() => {
    conn.write("Move: right")
  },
    4000);
  const timerId = setInterval(() => {
    conn.write("Move: up")
  }, 500);
  setTimeout(() => {
    clearInterval(timerId);
  }, 5000);
})
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function (data) {
  // your code here
  if (data === '\u0003') {
    process.exit();
  }
};
setupInput();
setupInput().on("data", handleUserInput);
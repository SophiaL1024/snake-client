const { move } = require('./constants');
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function(data) {
  // your code here
  if (data === '\u0003') {
    process.exit();
  }
  connection.write(move[data]);
};
setupInput().on("data", handleUserInput);
module.exports = {
  setupInput
};
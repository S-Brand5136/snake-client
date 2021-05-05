const { movements } = require("./constants");
let connection;

const setUpInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }

  connection.write(movements[key]);
};
module.exports = { setUpInput };

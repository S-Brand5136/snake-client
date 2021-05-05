// get the net package from node
const net = require("net");
const { IP, PORT, name } = require("./constants");

// establish a conenction to the game server
const connect = () => {
  // create connection to lighthouse labs snakeGame server
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // Set encoding so it returns human readable text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log(`Succesfully connected to the snake game server`);

    conn.write(`Name: ${name}`);
  });

  conn.on("end", () => {
    console.log("You lost!");
  });

  // return that established connection
  return conn;
};

module.exports = { connect };

// get the net package from node
const net = require("net");

// establish a conenction to the game server
const connect = () => {
  // create connection to lighthouse labs snakeGame server
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542,
  });

  // Set encoding so it returns human readable text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log(`Succesfully connected to the snake game server`);

    conn.write(`Name: BS`);
  });

  conn.on("end", () => {
    console.log("You lost!");
  });

  // return that established connection
  return conn;
};

module.exports = { connect };

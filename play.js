const { connect } = require("./client");
const { setUpInput } = require("./input");

console.log(`Connecting ...`);
const connection = connect();

setUpInput(connection);

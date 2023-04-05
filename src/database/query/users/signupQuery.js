const { connection } = require("../../config")

const signupQuery = ({ username, password, email }) => {
  const sql = {
    text: "INSERT INTO users(username, email, password) VALUES ($1, $2, $3) RETURNING username, email;",
    values: [username, email, password]
  }

  return connection.query(sql);
};

module.exports = signupQuery;
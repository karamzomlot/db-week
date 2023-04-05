const { connection } = require('../../config')

const createPostQuery = ({title, content, user_id}) => {
  const sql = {
    text: "INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *;",
    values: [title, content, user_id]
  };

  return connection.query(sql);
}


module.exports = createPostQuery;

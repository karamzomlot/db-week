const { createPostQuery } = require("../../database");

const createPostController = (req, res) => {
  const user_id = 3;
  const { title, content } = req.body;

  const result = createPostQuery({ title, content, user_id });
  result
    .then(data => {
      res.status(201).json({
        error: false,
        data: {
          post: data.rows[0],
          message: "Post Created Successfully!"
        }
      })
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: {
          message: err.message
        }
      })
    })
};

module.exports = createPostController;
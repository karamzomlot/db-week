const { signupQuery } = require("../../database");

const signupController = (req, res) => {
  const { username, email, password } = req.body;
  const results = signupQuery({ username, email, password });
  results
    .then(data => {
      res
        .status(201)
        .json({
          error: false,
          data: {
            user: data.rows[0],
            message: 'User Created Successfully!'
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
}

module.exports = signupController;
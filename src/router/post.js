const express = require('express');
const { createPostController } = require('../controller');

const postRouter = express.Router();

postRouter.post('/create', createPostController); // /api/v1/posts/create

module.exports = postRouter;
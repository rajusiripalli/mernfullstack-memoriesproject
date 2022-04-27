const express = require('express');
const { getPosts, createPost } = require('./postsController');

const postsRouter = express.Router();

postsRouter.get('/', getPosts);
postsRouter.post('/', createPost);



module.exports = postsRouter;
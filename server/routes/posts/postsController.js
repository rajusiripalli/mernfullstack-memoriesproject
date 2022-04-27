const asyncHandler = require('express-async-handler');
const Post = require('../../models/postModel');


//@desc Get Posts
//@route GET /posts
//@access private
const  getPosts = asyncHandler(async (req, res)=>{
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
            
        } catch (error) {
            res.status(404);
            throw new Error(`${error.message}`)
            
        }
    }
)

//@desc Get Posts
//@route GET /posts
//@access private
const  createPost = asyncHandler(async (req, res)=>{
    const post = req.body;

    const newPost = Post(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409);
        throw new Error(error.message);
    }
}
)


module.exports = {
    getPosts,
    createPost
}
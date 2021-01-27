const express = require('express');
const routes = express.Router();
const Post = require('../models/Post');


// List all posts
routes.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: err });
    }
});

//Submit a post
routes.post('/', async(req, res) => {
    //console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get specific post
routes.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post)
    } catch (error) {
        res.json({ message: err });
    }
});

// Delete specific post
routes.delete('/:postId', async(req, res) => {
    try {
        const postRemove = await Post.deleteOne({ _id: req.params.postId });
        res.json(postRemove);
    } catch (err) {
        res.json({ message: err });
    }

});

// Update specific post
routes.patch('/:postId', async(req, res) => {
    try {
        const postUpdate = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });
        res.json(postUpdate);
    } catch (error) {
        res.json({ message: err });
    }
});

module.exports = routes;
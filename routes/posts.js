const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find().sort({ _id: -1 });
        res.send(posts)
    } catch (err) {
        res.status(500).send("Server error")
    }
  });
  
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            res.status(404).send("Resource is not founded")
        } else {
            res.send(post)
        }

    } catch (err) {
        res.status(500).send("Server error")
    }
});

router.post("/", async (req, res) => {
    try {
        const { title, categories, content} = req.body
        let post = await new Post({
            title,
            categories,
            content
        });
        await post.save();
        res.send(post);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

router.put("/:id", async (req, res) => {
    try {

        const { title, categories, content} = req.body
        const post = await Post.findByIdAndUpdate(req.params.id, { title, categories, content });
        await post.save();

        res.send(post)


    } catch (err) {
        res.status(500).send("Error. Something went wrong");
    }
})

  router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).send("Resourse is not founded");
        await post.delete();
        res.send(post)
    } catch (err) {
        res.status(500).send("Server error")
    }
})


module.exports = router;
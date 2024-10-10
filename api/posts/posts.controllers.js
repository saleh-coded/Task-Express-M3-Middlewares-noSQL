const Post = require("../../models/Post");

exports.postsCreate = async (req, res,next) => {
  try {

    if(req.file){
      req.body.petImage = req.file.path;
    }

    const newPost = await Post.create(req.body);

    return res.status(201).json({data: newPost})
  } catch (error) {
    console.log(error)
    next(error)
  }
};

exports.postsDelete = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const foundPost = await Post.findById(postId);
    if (foundPost) {
      await foundPost.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "post not found" });
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
};

exports.postsUpdate = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const foundPost = await Post.findById(postId);
    if (foundPost) {
      await foundPost.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "post not found" });
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
};

exports.postsGet = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.log(error)
    next(error)
  }
};

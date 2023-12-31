const models = require("../models");

async function getAll(req, res) {
  try {
    const post = await models.Post.findAll();
    res.status(200).json({
      message: "success",
      post,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      post: null,
      error,
    });
  }
}

async function get(req, res) {
  const { id } = req.params;

  try {
    const post = await models.Post.findByPk(id);
    if (post) {
      res.status(200).json({
        message: "success",
        post,
        error: null,
      });
    } else {
      res.status(404).json({
        message: "Post not found!",
        post: null,
        error: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      post: null,
      error,
    });
  }
}

async function create(req, res) {
  const post = {
    ...req.body,
  };
  try {
    const result = await models.Post.create(post);
    res.status(201).json({
      message: "Post created successfully!",
      post: result,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      post: null,
      error,
    });
  }
}

async function update(req, res) {
  const { id } = req.params;
  const post = {
    ...req.body,
    userId: 1,
  };
  try {
    await models.Post.update(post, { where: { id, userId: 1 } });
    res.status(201).json({
      message: "Post updated successfully!",
      post: post,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      post: null,
      error: error.message,
    });
  }
}

async function destroy(req, res) {
  const { id } = req.params;
  try {
    await models.Post.destroy({ where: { id, userId: 1 } });
    res.status(200).json({
      message: "Post deleted successfully!",
      post: null,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      post: null,
      error: error.message,
    });
  }
}

module.exports = { get, getAll, create, update, destroy };

function index(req, res) {
  const posts = "Post list";
  res.send(posts);
}

export default {
  index,
};

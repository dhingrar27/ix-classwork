const Feedback = require('../models/feedback');

exports.getPosts = (req, res, next) => {
  const postQuery = Post.find();
  let fetchedPosts;
  postQuery
    .then((documents) => {
      fetchedPosts = documents;
    })
    .then(() => {
      res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: fetchedPosts,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching posts failed!',
      });
    });
};

exports.createPost = (req, res, next) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const pname = req.body.pname;
  const fback = req.body.fback;
  const feedback = new Feedback({
    fname : fname,
    lname : lname,
    email : email,
    pname : pname,
    fback: fback
  });
  feedback
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Post created successfully!',
        feedback: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deletePost = (req, res, next) => {
  Feedback.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({ message: 'Deletion successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching posts failed!',
      });
    });
};

exports.updatePost = (req, res, next) => {
  Feedback.findByIdAndUpdate(
    { _id: req.params.id },
    {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      pname: req.body.pname,
      fback: req.body.fback,
    }
  )
    .then((result) => {
      res.status(200).json({ message: 'Update successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Could not update post!',
      });
    });
};
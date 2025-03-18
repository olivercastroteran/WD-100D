const express = require('express');
const mongodb = require('mongodb');

const db = require('../data/database');

const ObjectId = mongodb.ObjectId;

const router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/posts');
});

router.get('/posts', async function (req, res) {
  const posts = await db
    .getDB()
    .collection('posts')
    .find({})
    .project({ title: 1, summary: 1, 'author.name': 1 })
    .toArray();

  res.render('posts-list', { posts });
});

router.post('/posts', async (req, res) => {
  const authorId = new ObjectId(req.body.author);
  const author = await db
    .getDB()
    .collection('authors')
    .findOne({ _id: authorId });

  const newPost = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.content,
    date: new Date(),
    author: {
      id: authorId,
      name: author.name,
      email: author.email,
    },
  };

  await db.getDB().collection('posts').insertOne(newPost);

  res.redirect('/posts');
});

router.get('/posts/:id', async (req, res, next) => {
  let postId = req.params.id;

  try {
    postId = new ObjectId(postId);
  } catch (error) {
    // return next(error);
    return res.status(404).render('404');
  }

  const post = await db
    .getDB()
    .collection('posts')
    .findOne({ _id: postId }, { summary: 0 });

  if (!post) {
    return res.status(404).render('404');
  }

  post.humanDate = post.date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  post.date = post.date.toISOString();

  res.render('post-detail', { post });
});

router.get('/new-post', async function (req, res) {
  const authors = await db.getDB().collection('authors').find().toArray();

  res.render('create-post', { authors });
});

router.get('/posts/:id/edit', async (req, res) => {
  const postId = req.params.id;

  const post = await db
    .getDB()
    .collection('posts')
    .findOne({ _id: new ObjectId(postId) }, { title: 1, summary: 1, body: 1 });

  if (!post) {
    return res.status(404).render('404');
  }

  res.render('update-post', { post });
});

router.post('/posts/:id/edit', async (req, res) => {
  const postId = new ObjectId(req.params.id);

  await db
    .getDB()
    .collection('posts')
    .updateOne(
      { _id: postId },
      {
        $set: {
          title: req.body.title,
          summary: req.body.summary,
          body: req.body.content,
          //date: new Date(),
        },
      },
    );

  res.redirect('/posts');
});

router.post('/posts/:id/delete', async (req, res) => {
  const postId = new ObjectId(req.params.id);

  await db.getDB().collection('posts').deleteOne({ _id: postId });

  res.redirect('/posts');
});

module.exports = router;

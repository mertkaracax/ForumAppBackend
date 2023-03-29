const express = require("express");

const { body } = require("express-validator/check");

const router = express.Router();

const feedController = require("../controllers/feed");

//GET /feed/posts
router.get("/posts", feedController.getPosts);

//POST /feed/post
router.post(
  "/post",
  [
    // validation check
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

//GET /feed/post/:x
router.get("/post/:postId", feedController.getPost);

//PUT /feed/post/:x
router.put(
  "/post/:postId",
  [
    // validation check
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.updatePost
);

//DELETE /feed/post/:x
router.delete("/post/:postId", feedController.deletePost);

module.exports = router;

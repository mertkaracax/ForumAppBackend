const express = require("express");

const { body } = require("express-validator/check");

const isAuth = require("../middleware/is-auth"); // authentication with jwt

const router = express.Router();

const feedController = require("../controllers/feed");

//GET /feed/posts
router.get("/posts", isAuth, feedController.getPosts);

//POST /feed/post
router.post(
  "/post",
  isAuth,
  [
    // validation check
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

//GET /feed/post/:x
router.get("/post/:postId", isAuth, feedController.getPost);

//PUT /feed/post/:x
router.put(
  "/post/:postId",
  isAuth,
  [
    // validation check
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.updatePost
);

//DELETE /feed/post/:x
router.delete("/post/:postId", isAuth, feedController.deletePost);

module.exports = router;

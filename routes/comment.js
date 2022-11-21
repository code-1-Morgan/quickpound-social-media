const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comment");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.post("/createComment/:postid", commentsController.createComment);

module.exports = router;

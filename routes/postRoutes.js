const express = require("express");
const router = express.Router();

const {createPost} = require('../controllers/createPost');
const {createComment} = require('../controllers/createComments');
const {likePost} = require('../controllers/likePost');
const {unlikePost} = require('../controllers/unlikePost');
const {updatePost} = require('../controllers/updatePost');
const {deletePost} = require("../controllers/deletePost");

router.post("/createPost" , createPost);
router.put("/createComment/:postId" , createComment);
router.put("/likePost/:postId" , likePost);
router.put("/unlikePost/:postId"  , unlikePost);
router.put("/updatePost/:postId" , updatePost);
router.delete("/deletePost/:postId" , deletePost);

module.exports = router;
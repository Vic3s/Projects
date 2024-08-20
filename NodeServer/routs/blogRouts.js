const express = require("express");
const blogsController = require("../controllers/blogsController");

const router = express.Router();


router.get("/", blogsController.blog_index);
router.post("/", blogsController.blog_creat_post);
router.get("/create", blogsController.blog_creat_get);
router.get("/:id", blogsController.blog_details);
router.delete("/:id", blogsController.blog_delet);

module.exports = router;
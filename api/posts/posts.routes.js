const express = require('express');
const router = express.Router();
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
} = require('./posts.controllers');
const upload = require('../../middleware/multer');

router.get('/', postsGet);
router.post('/',upload.single("petImage") , postsCreate);

router.delete('/:postId', postsDelete);

router.put('/:postId', postsUpdate);

module.exports = router;

const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');



// @route POST api/posts
// @ desc Create a post
// @access Private
router.post ('/',[auth, [check('text', 'Text is required').not().isEmpty() ]], (req,res) => {
    
});

module.exports = router;
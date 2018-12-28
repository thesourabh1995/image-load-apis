var express = require('express');
var router = express.Router();

/* GET home page. */

var loadImage = require('../apis/fetchImage.js');
router.get('/fetchImage', loadImage.loadImage);

module.exports = router;

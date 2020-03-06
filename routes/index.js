var express = require('express');
var router = express.Router();
const todoCtrl = require('../controllers/todos')

router.get('/', todoCtrl.index);
router.post('/new', todoCtrl.new);


module.exports = router;

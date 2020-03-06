var express = require('express');
var router = express.Router();
const todoCtrl = require('../controllers/todos')


router.post('/new', todoCtrl.new); 
router.delete('/:id', todoCtrl.delete);
router.put('/:id', todoCtrl.update); 


module.exports = router; 
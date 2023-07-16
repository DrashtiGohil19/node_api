var express = require('express');
const { register, getinsert, getbyid, getfirstone, getuser, deletebyid } = require('../controller/UserController')
var router = express.Router();

router.post('/',register);
router.get('/getinsert',getinsert);
router.get('/getbyid/:id',getbyid);
router.get('/getfirstone',getfirstone);
router.get('/getuser',getuser);
router.get('/deletebyid/:id',deletebyid);

module.exports = router;

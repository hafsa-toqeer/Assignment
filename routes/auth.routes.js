const express = require('express');
const router = express.Router();
const auth = require('./../controllers/auth.controller');
const authMiddleWare = require('./../middleware/auth.middleware')

router.post('/signup', auth.signup);

// router.get('/signup' , auth.signup)

// router.get('/login',auth.login);

router.post('/login',auth.login);

// router.post('/upload', auth.upload);
 

// router.post("/upload", auth.upload); 

module.exports = router;
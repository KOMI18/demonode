const express = require('express');
const router = express.Router();
const usernController = require('../controllers/user_controller');

router.post('/creates', usernController.createdUser);
router.get('/get-all-user', usernController.getAllUser);




module.exports = router;
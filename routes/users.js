var express = require('express');
var router = express.Router();

const userMiddleware = require('../middlewares/users');
const authMiddeware = require('../middlewares/utils/auth');
const userController = require('../controllers/users');

router.get('/', 
   authMiddeware.authorization, 
   userMiddleware.listAllUsers,
   userController.listAllUsers  
)

router.get('/:userID',
    userMiddleware.getUser,
    userController.getUser
)

router.post('/login',
  userMiddleware.checkLogin,
  userController.loginUser
)

router.post('/register',
  userMiddleware.insertUser,
  userController.insertUser
);

module.exports = router;




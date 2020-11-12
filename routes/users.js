var express = require('express');
var router = express.Router();

const userMiddleware = require('../middlewares/users');
const userController = require('../controllers/users');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/', 
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




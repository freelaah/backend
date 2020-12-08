var express = require('express');
var router = express.Router();

const categoryMiddleware = require('../middlewares/categories');
const categoryController = require('../controllers/categories');

router.post("/",
    categoryMiddleware.insertCategory,
    categoryController.insertCategory    
);

router.get("/", 
    categoryMiddleware.listAllCategories,
    categoryController.listAllCategories
);

router.get('/:categoryID',
    categoryMiddleware.getCategory,
    categoryController.getCategory
)


module.exports = router;

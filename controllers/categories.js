function insertCategory(req, res, next){
    console.log('>>> caiu no controller, insert category');
    res.status(200).send(req.body);
}

function listAllCategories(req, res, next){
    res.status(200).send(req.body);
}

module.exports = {insertCategory, listAllCategories}
function insertService(req, res, next){
    console.log('>>> caiu no controller, insert services');
    res.status(200).send(req.body);
}

function listAllServices(req, res, next){
    res.status(200).send(req.body);
}

module.exports = { insertService, listAllServices }

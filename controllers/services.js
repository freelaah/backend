function insertService(req, res, next){
    console.log('>>> caiu no controller, insert services');
    res.status(200).send(req.body);
}

function listAllServices(req, res, next){
    res.status(200).send(req.body);
}


function getService(req, res, next){
    res.status(200).send(req.body);
}


function getAllservicesByUser(req, res, next){
    res.status(200).send(req.body);
}


function deleteService(req, res, next){
    res.status(200).send();
}


module.exports = { insertService, listAllServices, getService, getAllservicesByUser, deleteService }

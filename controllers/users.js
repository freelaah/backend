function insertUser(req, res, next){
    console.log('>>> caiu no controller, insert user');
    res.status(200).send(req.body);
}

function listAllUsers(req, res, next){
    res.status(200).send(req.body);
}


function loginUser(req, res, next){
    res.status(200).send(req.body);
}

module.exports = {insertUser, listAllUsers, loginUser}
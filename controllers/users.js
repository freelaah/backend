function insertUser(req, res, next){
    console.log('>>> caiu no controller, insert user');
    
    if(req.body.error){
        res.status(400).send(req.body);
    }else{
        res.status(200).send(req.body);    
    }
    
    res.status(200).send(req.body);
}

function listAllUsers(req, res, next){
    res.status(200).send(req.body);
}

function getUser(req, res, next){
    res.status(200).send(req.body);
}


function loginUser(req, res, next){
    res.status(200).send(res.locals.data);
}

module.exports = {insertUser, listAllUsers, loginUser, getUser}
const jwt = require('jsonwebtoken');


async function authorization(req, res, next){

    try {
        //O token vem no header separado na string "Bearer <token>""
        const token = req.headers.authorization.split(' ')[1];
        console.log(token);
        let decoded = jwt.verify(token, 'palavraSuperSecreta');
        //res.locals.data = decoded;
        return next();
    }
    catch(error){
        console.log(error)
        res.status(401).send({"Message": "Invalid token authorization"})
    }
}

module.exports = {authorization}

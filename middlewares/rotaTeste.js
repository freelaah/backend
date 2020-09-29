function processaCalculo(req, res, next){
    console.log('Cai no middeware')    
    let calculo = 2+2;
    req.body["calculo"] = calculo;
    next();
}

module.exports = {processaCalculo}; //agora é possivel importatr essa funcionalidade desse middleware a partir de uyma rota
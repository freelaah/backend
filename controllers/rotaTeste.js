function resProcessaCalculo(req, res, next){
    console.log('caiu no controller');
    res.status(200).send({"respostaCalculo":req.body.calculo});
}

module.exports = {resProcessaCalculo}
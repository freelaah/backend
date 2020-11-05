const mongoose = require('mongoose');
const Schema = mongoose.Schema; //A biblioteca mongosse tem o schema para permitir tipagem dos dados e modelagem
//_id //Number // [] array
const userModel = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        encriptedPassword: {
            type: String,
            required: true

        },
        nome: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        }

    },
    { _id: true, collection: 'users' } //aqui estamos nomeando collection e dizendo que o id será criado automaticamente
);

module.exports = mongoose.model('users', userModel);
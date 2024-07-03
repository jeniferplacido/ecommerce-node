const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const registro = async(nome, sobrenome, email, senha) => {
    const usuario = new Usuario({nome, sobrenome, email, senha});
    await usuario.save();
    return usuario;
}


const login = async(email, senha) => {
    const usuario = await Usuario.findOne({email});
    if(!usuario){
        throw new Error('Usuário não encontrado');
    }
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if(!senhaValida){
        throw new Error('Senha inválida');
    }
    const token = jwt.sign({id:usuario.id}, process.env.JWT_SECRET, {expiresIn: '1h'})
    return token
}

module.exports = {
    registro,
    login
}
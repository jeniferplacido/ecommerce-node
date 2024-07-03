const authService = require('../services/authService')

const registro = async(req, res) => {
    try{
        const {nome, sobrenome, email, senha} = req.body;
        const usuario = await authService.registro(nome, sobrenome, email, senha);
        res.redirect('/login');
    }catch(error){
        res.status(500).send({error: error.message});
    }
}

const login = async(req, res) => {
    try{
        const {email, senha} = req.body;
        const token = await authService.login(email, senha);
        res.cookie('token', token);
        res.redirect('/produtos');
    }catch(error){
        res.status(500).send({error: error.message});
    }
}

module.exports = {
    registro,
    login
}
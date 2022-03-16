const User = require('../models/User');

//index == listagem de sessoes
//show == mostrar uma unica sessao
//store == criar sessao
//update == alterar sessao
//destroy == deletar sessao

module.exports = {
    async store(req, res){
        const email = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
}

const User = require('../models/User')
const {formatCep} = require('../../lib/utils')

module.exports = {
    registerForm(req, res) {
        return res.render("user/register")
    },
    async show(req, res){

        const { user } = req

        user.cep = formatCep(user.cep)

        return res.render('user/index', { user })
    },
    async post(req, res){ 
        try{
            const userId = await User.create(req.body)

            req.session.userId = userId

            return res.status(201).send();

        }catch(err){
            console.error(err)
        }
    },
    async update(req, res) {
        try{
            const { user } = req
            let {name, email, cpf_cnpj, cep, address} = req.body
            
            cep = cep.replace(/\D/g, "") 

            await User.update(user.id, {
                name,
                email,
                cep,
                address
            })

            return res.render("user/index", {
                user: req.body,
                success: "Conta atualizada com sucesso!"
            })

        }catch(err) {
            console.error(err)
            return res.render("user/index", {
                error: "Algum erro aconteceu!"
            })
        }
    }
}
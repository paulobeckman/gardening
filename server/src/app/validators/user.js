const User = require('../models/User')
const { compare } = require('bcryptjs')

function checkAllFields(body){
    const keys = Object.keys(body)
    
    for(key of keys) {
        if (body[key] == ""){
            return {
                user: body,
                error: 'Por favor, preencha todos os campos.'
            }
        }
    }  
}
async function show(req, res, next){
    const { userId: id } = req.session

    const user = await User.findOne({ where: {id} })

    if(!user) return res.render("user/register", {
        error: "Usuário não encontrado!"
    })

    req.user = user

    console.log(req.user)

    next()

}
async function post(req, res, next){
    // check if has all fields
    const fillAllFields = checkAllFields(req.body)
    if(fillAllFields){
        return res.send(fillAllFields)
    }

   //check if user exists [email, cpf_cnpj]
   let { email, password, passwordRepeat } = req.body
      
   const user = await User.findOne({
       where: { email }
   })

   if(user) return res.send({
       user: req.body,
       error: 'Usuário já cadastrado.'
   })

   //check if password match
   if(password != passwordRepeat) return res.send({
        user: req.body,
        error: 'A senha e a repetição da senha estão diferentes.'
    })

    next()
}
async function update(req, res, next){
    //check if has all fields
    const fillAllFields = checkAllFields(req.body)
    if(fillAllFields){
        return res.render("user/index", fillAllFields)
    }

    const { id, password } = req.body

    if(!password) return res.render("user/index", {
        user: req.body,
        error: "Coloque sua senha para atualizar seu cadastro."
    })

    const user = await User.findOne({ where: {id}})

    const passed = await compare(password, user.password)

    if(!passed) return res.render("user/index", {
        user: req.body,
        error: "Senha incorreta."
    })
 
    req.user = user

    next()
}

module.exports = {
    post,
    show,
    update
}
const User = require('../models/User')

module.exports = {
    async SignIn(req, res){
        try{
            return res.send(JSON.stringify(req.session.userId))
            
        }catch(err){
            console.error(err) 
        }
    }
}
module.exports = {
    loginForm(req, res) {
        return res.render("session/login")
    },
    login(req, res){
        req.session.userId = req.user.id 

        return res.status(201).send(JSON.stringify(req.session))
    },
    logout(req, res) {
        req.session.destroy()
        return res.status(201).send()
    },
}
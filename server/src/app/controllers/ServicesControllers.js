const Services = require('../models/Service')

module.exports = {
    post(req, res){
        try{
            const total ={
                ...req.body,
                user_id: req.session.userId
            }

            Services.create(total)            
            return res.status(201).send('ok');

        }catch(err){
            console.error(err)
        }
    },
    async all(req, res){
        try{
            const results = await Services.all()
            const services = results.rows

            return res.status(201).send((services));
            
        }catch(err){
            console.error(err)
        }
    },
    async show(req, res){
        try{
            let results = await Services.findAll(req.params.id)
            const services = results.rows

            return res.status(201).send((services));
            
        }catch(err){
            console.error(err)
        }
    },
    async findShow(req, res){
        try{
            let results = await Services.findShow(req.params.id)
            const services = results.rows
            
            return res.status(201).send((services));
            
        }catch(err){
            console.error(err)
        }
    },
    async findServices(req, res){
        try{
            let results = await Services.findServices(req.session.userId)
            const services = results.rows

            return res.status(201).send((services));
            
        }catch(err){
            console.error(err)
        }
    }
}
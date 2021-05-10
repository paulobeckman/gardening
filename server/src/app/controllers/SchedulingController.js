const Scheduling = require('../models/Scheduling')

module.exports = { 
    async index(req, res){
        try{
            const results = await Scheduling.find(req.session.userId)
            let scheduling = results.rows

            for (let i = 0; i < scheduling.length; i++) {
                const day = `0${scheduling[i].date.getDate()}`.slice(-2)
                const month = `0${scheduling[i].date.getUTCMonth() + 1}`.slice(-2)
                const year = scheduling[i].date.getFullYear()
                const DataDate = `${day}/${month}/${year}`
                
                const hour = `0${scheduling[i].date.getHours()}`.slice(-2)
                const minutes = `0${scheduling[i].date.getMinutes()}`.slice(-2)
                const Datahour = `${hour}:${minutes}`

                scheduling[i] = {
                    ...scheduling[i],
                    date: DataDate,
                    hour: Datahour
                }
            }

            return res.status(201).send((scheduling));
            
        }catch(err){
            console.error(err)
        }
    },
    async schedules(req, res){
        try{
            const results = await Scheduling.findSchedules(req.session.userId)
            const scheduling = results.rows

            for (let i = 0; i < scheduling.length; i++) {
                const day = `0${scheduling[i].date.getDate()}`.slice(-2)
                const month = `0${scheduling[i].date.getUTCMonth() + 1}`.slice(-2)
                const year = scheduling[i].date.getFullYear()
                const DataDate = `${day}/${month}/${year}`
                
                const hour = `0${scheduling[i].date.getHours()}`.slice(-2)
                const minutes = `0${scheduling[i].date.getMinutes()}`.slice(-2)
                const Datahour = `${hour}:${minutes}`

                scheduling[i] = {
                    ...scheduling[i],
                    date: DataDate,
                    hour: Datahour
                }
            }

            return res.status(201).send((scheduling));
            
        }catch(err){
            console.error(err)
        }
    },
    post(req, res){
        try{
            const total ={
                ...req.body,
                user_id: req.session.userId,
            }

            Scheduling.create(total)            
            return res.status(201).send();

        }catch(err){
            console.error(err)
        }
    }
}

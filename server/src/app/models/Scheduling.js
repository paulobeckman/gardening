const db = require('../../config/db')

module.exports = {
    find(id){
        try{
            return db.query(`SELECT scheduling.*, users.name AS gardener_name, users.phone AS gardener_phone, services.title, services.description, services.price
                FROM scheduling 
                INNER JOIN users ON (users.id = scheduling.gardener_id)
                INNER JOIN services ON (services.id = scheduling.service_id)
                WHERE scheduling.user_id = $1`, [id]
            )
        }catch(err){
            console.error(err)
        }
    },
    async create(data){
        try{
            const query =`
                INSERT INTO scheduling (
                    gardener_id,
                    user_id,
                    service_id,
                    date
                ) VALUES ($1, $2, $3, $4)
                RETURNING id
            `

            const values = [
                data.gardener_id,
                data.user_id,
                data.service_id,
                data.date
            ]

            const results = await db.query(query, values)
            return results.rows[0].id

        }catch(err){
            console.error(err)
        }
    },
    findSchedules(id){
        try {
            return db.query( `SELECT scheduling.*, users.name AS client_name, users.phone AS client_phone,
                users.latitude, users.longitude,
                users.address, services.title, services.description, services.price
                FROM scheduling 
                INNER JOIN users ON (users.id = scheduling.user_id)
                INNER JOIN services ON (services.id = scheduling.service_id)
                WHERE scheduling.gardener_id = $1`, [id]
            )
        } catch (error) {
            console.error(error)
        }
    }
}
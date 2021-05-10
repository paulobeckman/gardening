const db = require('../../config/db')

module.exports = {
    all(){
        try{
            return db.query(`
                SELECT services.*, users.name AS user_name, users.latitude AS latitude, users.longitude AS longitude
                FROM services 
                LEFT JOIN users ON (users.id = services.user_id)
            `)
        }catch(err){
            console.error(err)
        }
    },
    async create(data){
        try{
            const query =`
                INSERT INTO services (
                    user_id,
                    title,
                    price,
                    description
                ) VALUES ($1, $2, $3, $4)
                RETURNING id
            `

            const values = [
                data.user_id,
                data.title,
                data.price.replace(/\D/g, ""),
                data.description
            ]

            const results = await db.query(query, values)
            return results.rows[0].id

        }catch(err){
            console.error(err)
        }
    },
    findAll(id){
        try{
            return db.query (`SELECT services.*, users.name AS user_name 
                    FROM services 
                    LEFT JOIN users ON (users.id = services.user_id)
                    WHERE user_id = $1`, [id]
            )
        }catch(err){
            console.error(err)
        }
    },
    findShow(id){
        try{
            return db.query(`SELECT services.*, users.name AS user_name
                    FROM services 
                    LEFT JOIN users ON (users.id = services.user_id)
                    WHERE services.id = $1`, [id]
            )
        }catch(err){
            console.error(err)
        }
    },
    findServices(id){
        try {
            return db.query(`SELECT services.*, users.name AS user_name
            FROM services 
            LEFT JOIN users ON (users.id = services.user_id)
            WHERE services.user_id = $1`, [id]
        )
        } catch (error) {
            console.log(error)
        }
    }
}
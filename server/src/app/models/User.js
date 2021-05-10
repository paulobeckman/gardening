const db = require('../../config/db')
const { hash } = require('bcryptjs')

module.exports = {
    async findOne(filters){
        let query = "SELECT * FROM users"

        Object.keys(filters).map(key => {
            query = `${query}
            ${key}
            `

            Object.keys(filters[key]).map(field => {
                query = `${query} ${field} = '${filters[key][field]}'`
            })
        })

        const results = await db.query(query)
        return results.rows[0]
    },
    async create(data) {
        try{
            const query = `
                INSERT INTO users (
                    name,
                    email,
                    password,
                    cep,
                    address,
                    phone,
                    latitude,
                    longitude
                ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                RETURNING id
            `
            //has of password
            const passwordHash = await hash(data.password, 8)
            
            const values = [
                data.name,
                data.email,
                passwordHash,
                data.cep.replace(/\D/g, ""),
                data.address,
                data.phone.replace(/\D/g, ""),
                data.latitude,
                data.longitude
            ]

            const results = await db.query(query, values)
            return results.rows[0].id

        } catch(err){
            console.error(err)
        }
    },
    async update(id, fields) {
        let query = "UPDATE users SET"

        Object.keys(fields).map((key, index, array) => {
            if((index + 1) < array.length) {
                query = `${query}
                    ${key} = '${fields[key]}',
                `
            }else {
                query = `${query}
                    ${key} = '${fields[key]}'
                    WHERE id = ${id}
                `
            }
        })

        await db.query(query)
        return
    },
    findUser(id){
        try {
            return db.query(`SELECT id
                FROM users
                WHERE id = $1`, [id]
            )
        } catch (error) {
            console.error(error)
        }
    }
}
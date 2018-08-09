const mysql = require('mysql')

const conn = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'password',
	database : 'ryans_list'
})

conn.connect()

module.exports = conn
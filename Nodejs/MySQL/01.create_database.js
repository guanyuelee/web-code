const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1', 
    user: 'root',
    password: 'admin123', 
    database: 'my_db_01' 
})

/*
db.query('SELECT * from users', (err, results) => {
    if(err) return console.log('err.message')
    console.log(results)
})
*/

/* const new_user = {username: 'spider-man', password: 'pcc123'}
const sqlStr = 'insert into users (username, password) values (?, ?)'

db.query(sqlStr, [new_user.username, new_user.password], (err, results) => {
    if(err) {
        return console.log('Error: ' + err.message)
    }
    if(results.affectedRows === 1){
        console.log('Add new user successfully. ')
    }
    else{
        console.log('failed to add new user. ')
    }
})
 */

const update_user = {id: 6, username: 'spider-man3', password: '000000'}
const sqlStr = 'update users set username=?, password=? where id=?'
db.query(sqlStr, [update_user.username, update_user.password, update_user.id], (err, results) => {
    if(err) {
        return console.log('Error: ' + err.message)
    }
    if(results.affectedRows === 1){
        console.log('Update new user successfully. ')
    }
    else{
        console.log('failed to update new user. ')
    }
})


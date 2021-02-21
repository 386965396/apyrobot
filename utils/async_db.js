const mysql = require('mysql8.0');
const { database } = require('./config');
const pool  = mysql.createPool(database);

const dbquery = function(sql, values ) {
    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(error, connection) {
            if (error) {
                console.log('Get mysql pool connection error: ', error);
                reject( error );
            } else {
                connection.query(sql, values, ( error, rows) => {
                    if ( error ) {
                        console.log('db query error: ', error);
                        reject( error );
                    } else {
                        resolve( rows );
                    }
                    connection.release();
                })
            }
        })
    })
}
  
module.exports = { dbquery }
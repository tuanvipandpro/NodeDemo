'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    /**
     * Get Account By Username
     */    
    getByUsername: (username) => {
        const sql = 'SELECT * ' + 
                    'FROM account ' + 
                    'WHERE username = ? '
        return new Promise((resolve, reject) => {
            db.query(sql, username, (error, response) => {
                if (error || response.length === 0) {
                    reject(error)
                }
                else {
                    resolve(response)
                }
            })
        })
        // End  
    }
}
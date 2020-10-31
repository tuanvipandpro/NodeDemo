'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    getAll: (req, res) => {
        console.log(req)
        console.log(res)
        let sql = 'SELECT * FROM product'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    }
}
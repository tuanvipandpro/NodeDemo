'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

// Path Variable : Params
// Parameter : Query
module.exports = {
    getAll: (req, res) => {
        const sql = 'SELECT * ' + 
                    'FROM product'

        db.query(sql, (err, response) => {
            if (err) throw err
            res.status(200).json(response)
        })
    },

    getById: (req, res) => {
        const sql = 'SELECT * ' +
                    'FROM product ' +
                    'WHERE id = ? '

        const params = [req.params.productId]

        db.query(sql, params,  (err, response) => {
            if (err) throw err
            res.status(200).json(response)
        })
    },

    updateById: (req, res) => {
        const sql = 'UPDATE product ' +
                    'SET ? ' +
                    'WHERE id = ? '

        const data = req.body
        const id = [req.params.productId]

        console.log(data)

        db.query(sql, [data, id],  (err, response) => {
            if (err) {
                res.status(500).json({ error: 'Internal Server Error !'})
            }
            res.status(200).json({message: 'Success !'})
        })
    }
}
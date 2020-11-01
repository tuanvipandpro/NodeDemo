'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

// Path Variable : Params
// Parameter : Query
module.exports = {
    /**
     * Get all product
     */    
    getAll: () => {
        const sql = 'SELECT * ' + 
                    'FROM product'
        

        db.query(sql, (err, response) => {
            if (err) throw err
            return response
        })
    },

    /**
     * Get product by id
     * @param id
     */
    getById: (id) => {
        const sql = 'SELECT * ' +
                    'FROM product ' +
                    'WHERE id = ? '

        db.query(sql, id,  (err, response) => {
            return err ? null : response
        })
    },

    /**
     * Update product by id
     * @param data
     * @param id
     */
    updateById: (data, id) => {
        const sql = 'UPDATE product ' +
                    'SET ? ' +
                    'WHERE id = ? '

        db.query(sql, [data, id],  (err, response) => {
            return err ? null : response
        })
    }
}
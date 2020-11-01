'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')
// const { resolve } = require('path')
// const { rejects } = require('assert')
// const { response } = require('express')

// Path Variable : Params
// Parameter : Query
module.exports = {
    /**
     * Get all product
     */    
    getAll: () => {
        const sql = 'SELECT * ' + 
                    'FROM product';
        return new Promise((resolve, reject) => {
            db.query(sql, (error, response) => {
                if (error) {
                    reject(error)
                }
                else {
                    resolve(response)
                }
            })
        })
        // End  
    },

    /**
     * Get product by id
     * @param id
     */
    getById: (id) => {
        const sql = 'SELECT * ' + 
                    'FROM product ' + 
                    'WHERE id  = ? '
        return new Promise((resolve, reject) => {
            db.query(sql, id, (error, response) => {
                if (error) {
                    reject(error)
                }
                else {
                    resolve(response)
                }
            })
        })
        // End          
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

        return new Promise((resolve, reject) => {
            db.query(sql, [data, id], (error, response) => {
                if (error) {
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
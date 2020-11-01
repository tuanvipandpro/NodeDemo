'use strict'

const productRepository = require('./../repository/ProductRepository')

module.exports = {
    /**
     * Get all product
     */    
    getAll: () => {
        return new Promise((resolve, reject) => {
            productRepository.getAll()
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    /**
     * Get product by id
     * @param id
     */
    getById: (id) => {
        return new Promise((resolve, reject) => {
            productRepository.getById(id)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    /**
     * Update product by id
     * @param data
     * @param id
     */
    updateById: (data, id) => {
        return new Promise((resolve, reject) => {
            productRepository.updateById(data, id)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}
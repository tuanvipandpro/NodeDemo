'use strict'

const productRepository = require('./../repository/ProductRepository')

module.exports = {
    /**
     * Get all product
     */    
    getAll: () => {
        console.log(productRepository.getAll())
        return productRepository.getAll()
    },

    /**
     * Get product by id
     * @param id
     */
    getById: (id) => {
        return productRepository.getById(id)
    },

    /**
     * Update product by id
     * @param data
     * @param id
     */
    updateById: (data, id) => {
        return productRepository.updateById(data, id)
    }
}
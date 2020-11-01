'use strict'

const ProductService = require('./../service/ProductService')

// Path Variable : Params
// Parameter : Query
module.exports = {
    /**
     * Get all product
     */    
    getAll: (req, res) => {
        let data =  ProductService.getAll()
        if (!data) {
            res.status(404).json(data)
        } else {
            res.status(200).json(data)
        }
    },

    /**
     * Get product by id
     * @param id
     */
    getById: (req, res) => {
        let data =  ProductService.getById(req.params.productId)
        if (!data) {
            res.status(404).json(data)
        } else {
            res.status(200).json(data)
        }
    },

    /**
     * Update product by id
     * @param data
     * @param id
     */
    updateById: (req, res) => {
        let data =  ProductService.updateById(req.body, req.params.productId)
        if (!data) {
            res.status(404).json(data)
        } else {
            res.status(200).json(data)
        }
    }
}
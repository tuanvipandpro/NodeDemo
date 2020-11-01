'use strict'
const ProductService = require('./../service/ProductService')

module.exports = {
    /**
     * Get all product
     */    
    getAll: (req, res) => {
        ProductService.getAll().then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(500).json(err)
        })
    },

    /**
     * Get product by id
     * @param id
     */
    getById: (req, res) => {
        const id =  req.params.productId

        ProductService.getById(id).then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(500).json(err)
        })        
    },

    /**
     * Update product by id
     * @param data
     * @param id
     */
    updateById: (req, res) => {
        const body = req.body
        const id = req.params.productId
        let data =  ProductService.updateById(req.body, req.params.productId)
        ProductService.updateById(req.body, req.params.productId).then(data => {
            res.status(200).json({message: 'Successfully !!!'})
        }).catch(err => {
            res.status(500).json(err)
        }) 
    }
}
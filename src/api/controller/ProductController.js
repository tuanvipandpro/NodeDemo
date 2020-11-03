'use strict'
const ProductService = require('./../service/ProductService')

module.exports = {
    /**
     * Get all product
     */    
    getAll: async (req, res) => {
        try {
            const rows = await ProductService.getAll()
            if (!rows) res.status(404).json({message: 'Not Found'})
            else {
                res.status(200).json(rows)
            }
        }
        catch(e) {
            console.error(e)
            res.status(500).json(e)
        }
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
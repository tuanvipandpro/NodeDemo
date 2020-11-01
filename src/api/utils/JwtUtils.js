'use strict'
const jwt = require('jsonwebtoken')

const ACCESS_TOKEN_LIFE = '100h'
const ACCESS_TOKEN_SECRET = 'JLUgkGLgGI5662649lbjLggLjf5+499'

module.exports = {
    /**
     * Generate Token 
     */    
    generateToken: (data) => {
        try {
            return jwt.sign(data, ACCESS_TOKEN_SECRET, {algorithm: 'HS256', expiresIn: ACCESS_TOKEN_LIFE})
        }
        catch(e) {
            console.error('Error when generater token : ' + e)
            return null
        }
    },
    /**
     * Verify Token
     */  
    verifyToken: (req, res) => {

    }
}
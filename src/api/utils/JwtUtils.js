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
    verifyToken: (req, res, next) => {
        if (req.originalUrl.match('/auth/login')) return next()
        else {
            if (!req.headers.authorization) res.status(403).json('Forbidden !!!')
            let token = req.headers.authorization.substring(7)
            // Verify Token
            try {
                const isVerify = jwt.verify(token, ACCESS_TOKEN_SECRET, {algorithm: 'HS256', expiresIn: ACCESS_TOKEN_LIFE})
                return next()
            }
            catch(e) {
                res.status(403).json('Forbidden !!!')
            }
        }      
    }
}
'use strict'
const jwt = require('jsonwebtoken')
const logger = require('../utils/LoggerUtils')

// JWT Credentials
const ACCESS_TOKEN_LIFE = '100h'
const ACCESS_TOKEN_SECRET = 'JLUgkGLgGI56df626ghT4+9lbjLggLjf5+49zXCV9a'

// Constant
const NO_AUTH_URL = ['/auth/login', '/', '/auth/login-gmail']

module.exports = {
    /**
     * Generate Token 
     * @param data
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
     * @param req
     * @param res
     * @param next
     */  
    verifyToken: (req, res, next) => {
        logger.info(req.originalUrl)
        if (NO_AUTH_URL.includes(req.originalUrl)) return next()
        else {           
            try {
                let token = req.headers.authorization.substring(7)
                const isVerify = jwt.verify(token, ACCESS_TOKEN_SECRET, {algorithm: 'HS256', expiresIn: ACCESS_TOKEN_LIFE})
                return next()
            }
            catch(e) {
                res.status(403).json({message: 'Forbidden !!!'})
            }
        }      
    }
}
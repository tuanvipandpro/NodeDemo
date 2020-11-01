'use strict'
const loginService = require('./../service/LoginService')

module.exports = {
    /**
     * Login 
     * @param username
     * @param password
     * @returns access_token
     * @returns profile
     */    
    login: (req, res) => {
        const body = req.body

        loginService.login(body.username, body.password).then(data => {
            
            res.status(data.statusCode).json(data)
        }).catch(err => {
            if (err === null) res.status(403).json({message: 'Username or password is incorrect !!!'})
            else res.status(500).json(err)
        })
    }
}
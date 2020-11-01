'use strict'
const bcrypt = require('bcrypt')
const jwtUtils = require('./../utils/JwtUtils')
const loginRepository = require('./../repository/LoginRepository')

module.exports = {
    /**
     * Get all product
     */    
    login: (username, password) => {
        return new Promise((resolve, reject) => {
            loginRepository.getByUsername(username)
            .then(res => {
                const isPasswordValid = bcrypt.compareSync(password, res[0].password)
                if (!isPasswordValid) {
                    // Password Incorrect
                    resolve({message: 'Password is incorrect', statusCode: 403})
                } else {
                    const access_token = jwtUtils.generateToken({username: res[0].username})
                    
                    if (!access_token) resolve({message: 'Generate JWT Error !!!', statusCode: 401})
                    else {
                        res[0].password = undefined
                        resolve({data: res[0], statusCode: 200, access_token: access_token})
                    }
                }
                
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}
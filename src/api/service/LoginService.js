'use strict'
const bcrypt = require('bcrypt')
const jwtUtils = require('./../utils/JwtUtils')
const firebaseUtils = require('./../utils/FirebaseUtils')
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
                    resolve({message: 'Password is incorrect', statusCode: 403})
                } else {
                    const access_token = jwtUtils.generateToken({username: res[0].username})
                    
                    if (!access_token) resolve({message: 'Generate JWT Error !!!', statusCode: 401})
                    else {
                        res[0].password = undefined
                        resolve({user: res[0], statusCode: 200, access_token: access_token})
                    }
                }
                // End
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    loginGmail: async (idToken) => {
        // console.log(idToken)
        const isValid = await firebaseUtils.validateIdToken(idToken)
        console.log(isValid)
        return isValid
    }
}
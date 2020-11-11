const bcrypt = require('bcrypt')
const jwtUtils = require('./../utils/JwtUtils')
const firebaseUtils = require('./../utils/FirebaseUtils')
const loginRepository = require('./../repository/LoginRepository')

module.exports = {
    /**
     * Login By Username or Password
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
                    
                    if (!access_token) resolve({message: 'Generate JWT Error !!!', statusCode: 500})
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
    /**
     * Login By Gmail
     */ 
    loginGmail: async (idToken) => {
        try {
            const response = await firebaseUtils.validateIdToken(idToken)
            let responseObj = {message: 'Your idToken is invalid !!!', statusCode: 401}

            if (response) {
                const res = await loginRepository.getByEmail(response.email)
                const access_token = jwtUtils.generateToken({username: res[0].username})
                
                responseObj = (access_token) 
                    ? {user: res[0], statusCode: 200, access_token: access_token}
                    : {message: 'Generate JWT Error !!!', statusCode: 500}
            }
            return responseObj
        }
        catch(e) {
            console.error(e)
            throw e
        }
    }
    // End
}
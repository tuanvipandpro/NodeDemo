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

        if (!body.username || !body.password) {
            res.status(400).json({message: 'Bad Request !'})
        } else {
            loginService.login(body.username, body.password).then(data => {
                res.status(data.statusCode).json(data)
            }).catch(err => {
                if (err === null) res.status(403).json({message: 'Username or password is incorrect !!!'})
                else res.status(500).json(err)
            })
        }
    },
    /**
     * Login by Gmail
     * @param idToken
     * @param Gmail
     * @returns access_token
     * @returns profile
     */  
    loginGmail: async (req, res) => {
        const idToken = req.body.idToken
        try{
            const response = await loginService.loginGmail(idToken)
            response.user.password = undefined
            res.status(response.statusCode).json(response)
        }
        catch (e) {
            console.error(e)
            res.status(500).json({message: 'Error'})
        }
    }
}
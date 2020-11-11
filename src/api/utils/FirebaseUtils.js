const admin = require('firebase-admin')
const cert = require('./../../../authengg-a25b9-firebase-adminsdk-90sa0-40ed64a706.json')

module.exports = {
    /**
     * Create Firebase Admin
     */     
    createFirebaseAdmin: () => {
        admin.initializeApp({
            credential: admin.credential.cert(cert),
            databaseURL: 'https://authengg-a25b9.firebaseio.com'
        })
    },
    /**
     * Validate IdToken
     * @param idToken
     */  
    validateIdToken: (idToken) => {
        return new Promise((resolve, reject) => {
            admin.auth().verifyIdToken(idToken).then(decodedToken => {
                // resolve({name : decodedToken.name, email: decodedToken.email})
                resolve(decodedToken)
            }).catch(e => {
                console.error(e)
                reject(e)
            })
        })
        // End
    }
}
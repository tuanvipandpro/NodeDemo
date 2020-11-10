const admin = require('firebase-admin')
const cert = require('./../../../authengg-a25b9-firebase-adminsdk-90sa0-40ed64a706.json')

module.exports = {
    createFirebaseAdmin: (req, res, next) => {
        try {
            const instanceId = admin.instanceId()
        }
        catch(e) {
            admin.initializeApp({
                credential: admin.credential.cert(cert),
                databaseURL: 'https://authengg-a25b9.firebaseio.com'
            });
        }
        next()
    },

    validateIdToken: async (idToken) => {
        try {
            const decodedToken = await admin.auth().verifyIdToken(idToken)
            console.log(decodedToken)
            return decodedToken
        }
        catch(e) {
            return false
        }
    }
}
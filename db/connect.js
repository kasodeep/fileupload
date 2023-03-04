const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI
        , {
            useNewUrlParser: true, useUnifiedTopology: true
        }, (err) => {
            if (!err) {
                console.log('Connection Successful')
            } else {
                console.log('Failed Connection ' + err)
            }
        })
}

module.exports = connectToMongo

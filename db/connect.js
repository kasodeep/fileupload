const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI)
}

const db = mongoose.connection
db.on("error", console.error.bind(console, "Connection Error:"))
db.once("open", () => {
    console.log("Database Connected");
})

module.exports = connectToMongo

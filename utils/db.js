const mongoose = require('mongoose')

URI = "mongodb+srv://<gmail>:<password>@restapi.fn424fc.mongodb.net/?retryWrites=true&w=majority&appName=<dbname>"

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connected to database");
    } catch (error) {
        console.error(error,"error getting data")
    }
}

module.exports = connectDB

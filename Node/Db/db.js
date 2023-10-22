const mongoose = require("mongoose");


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connection successfull")
    }
    catch (error) {
        console.log(`connection error ${error}`)
    }
}

module.exports = connectDb
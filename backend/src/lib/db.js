const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")

const connectDb = asyncHandler (
    async () => {
        const conn = await mongoose.connect(process.env.uri) 
        if (conn){
            console.log(`Conn connect successfully on host ${conn.connection.host}`)
        } else {
            throw new Error("Mongo Error")
        }
    }
)

module.exports = connectDb 
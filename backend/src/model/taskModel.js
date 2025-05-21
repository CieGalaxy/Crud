const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const taskSchema = new mongoose.Schema({ 
    name : { type : String , required : true } ,
    email : { type : String , required : true  } ,
    password : { type : String , required : true } 
})

const taskModel = mongoose.model("Tasks" , taskSchema) 

module.exports = taskModel
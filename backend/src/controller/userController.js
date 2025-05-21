const asyncHandler = require("express-async-handler")
const Task = require("../model/taskModel.js")

const create = asyncHandler(
    async (req , res) => {
        const { name , email , password } = req.body
        if (!name || !email || !password ) {
            throw new Error("you are required to fill in all field")
        }
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(email)){
            throw new Error("Please enter a valid email")
        }
        const st = new Task({name : name , email : email , password : password})
        const newShit = await st.save()
        res.status(201).json({ message : "Task saved Success" , info : newShit })
    }
)

const getAll = asyncHandler( 
    async (req , res) => {
        const all = await Task.find()
        
        res.status(200).json({ message : "All Task Get Success" , info : all})
    }
)

const updateTask = asyncHandler(
    async (req , res) => {
        const { name , email , password } = req.body 
        const { id } = req.params 
        if (!id){
            throw new Error("Id is Invalid")
        }
        const data = await Task.findOne({ _id : id })
        const upt = await Task.findOneAndUpdate({_id : id} , { $set : { name , email , password }}, {new : true} ) 
        res.status(200).json({ message : "update mage successful" , data , info : upt })
    }
)

const delTask = asyncHandler(
    async (req , res) => {
        const { id } = req.params 
        const delUser = await Task.deleteOne({ _id : id })
        res.status(200).json({ message : `User at ${id} has been deleted` , info : delUser})
    }
)

const getTask = asyncHandler(
    async (req , res) => {
        const {id} = req.params 
        const data = await Task.findOne({_id : id})
        if (!data) {
            throw new Error("User Doesnot Exist")
        }
        res.status(200).json({ message : "Fetched Successfully" , data })
    }
)

module.exports = {
    create , getAll , updateTask , delTask , getTask
}
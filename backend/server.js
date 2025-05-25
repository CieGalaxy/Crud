const express = require("express")
const taskRouter = require("./src/routes/taskRoute.js")
const { notFound , errorMiddleware} = require("./src/middleware/errorMiddleware.js")
const connectDb = require("./src/lib/db.js")
const CORS = require("cors")
require("dotenv/config.js")

const app = express() 

const port = process.env.port || 5005
 
app.use(CORS({ credentials : false , origin : "https://todos-1-b015f.web.app" }))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use("/api" , taskRouter)

app.use(notFound)
app.use(errorMiddleware)

app.listen(port , () => {
    console.log("Running On Port : " + port)
    connectDb()
})

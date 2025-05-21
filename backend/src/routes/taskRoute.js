const router = require("express").Router()
const { create , getAll , updateTask , delTask , getTask } = require("../controller/userController.js")
const { idCheck } = require("../middleware/middleware.js")

router.post("/task" , create)
router.get("/alltasks" , getAll)
router.get("/gettask/:id" , getTask)
router.put("/uptask/:id" , updateTask)
router.delete("/deltask/:id" , delTask )

module.exports = router
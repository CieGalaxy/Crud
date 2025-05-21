const idCheck = (req , res , next) => {
    const id = req.params.id ;
    if (!Number.isInteger(Number(id))){
        return res.status(400).json({ message : "Invalid ID " })
    }
    next()
}

module.exports ={
    idCheck
}  
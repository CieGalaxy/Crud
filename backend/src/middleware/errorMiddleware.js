const notFound = async (req , res , next) => {
    const status = res.statusCode === 200 ? 404 : res.statusCode
    const pil = `${req.protocol}://${req.get("host")}${req.originalUrl}`
    res.status(400).json({ message : `Url Not Found for ${pil}` })
}

const errorMiddleware = async (err , req , res , next) => {
    const message = err.message 
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    let adMessage 

    if (err.name === "CastError" && err.kind === "ObjectId") {
        adMessage = "It Was A mongoose Kind of error"
    }

    res.status(statusCode).json({ message , adMessage , stack : process.env.node_env === "prodcution" ? "" : err.stack })
}

module.exports = {
    notFound , errorMiddleware
}
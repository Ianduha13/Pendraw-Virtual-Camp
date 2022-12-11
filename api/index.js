const path = require("path")
const express = require("express")
const dotenv = require("dotenv").config()
const { errorHandler } = require("../middleware/errorMiddleware")
const connectDB = require("../config/db")
const cors = require("cors")
const bodyParse = require("body-parser")

connectDB()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/posts", require("../routes/postRoutes"))
app.use("/api/users", require("../routes/userRoutes"))

app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())

app.use(errorHandler)

export default app

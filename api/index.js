const path = require("path")
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const { errorHandler } = require("../middleware/errorMiddleware")
const connectDB = require("../config/db")

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(errorHandler)

app.use("/api/posts", require("../routes/postRoutes"))
app.use("/api/users", require("../routes/userRoutes"))

export default app

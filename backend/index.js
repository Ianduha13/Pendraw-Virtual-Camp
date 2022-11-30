const path = require("path")
const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const port = process.env.PORT || 5000
const cors = require("cors")
const logger = require("morgan")

connectDB()

const app = express()

app.use(express.json())

app.use("/api/posts", require("./routes/postRoutes"))
app.use("/api/users", require("./routes/userRoutes"))

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")))
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  )
} else {
  app.get("/", (req, res) => res.send("Please set to production"))
}
app.use(errorHandler)

module.exports = app

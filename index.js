// Import packages
const express = require("express")
const app = express()

const mongoose = require("mongoose")

// Connect to database
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost:27017/back_to_front");
mongoose.connection.on('connected', () => {
  console.log('DB Connected')
})
mongoose.connection.on('error', (err)=>{console.log(err)})

// Import routes
const todoRoutes = require('./routes/todo.routes')
// use middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// use routes middleware
app.use('/todo', todoRoutes)
// running the server
const port = 8000
app.listen(port, () => {
  console.log('our server is working')
})
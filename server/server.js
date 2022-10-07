const express = require("express")
const app = express()
const port = 8000
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:3000"
})) /* this hooks backend to frontend, must be installed locally */
// require('dotenv').config() /* don't worry about this */

//import config
require("./config/mongoose.config.js")

//import routes
require('./routes/job.routes')(app)

//run server
app.listen(port, ()=>{console.log(`SERVER UP, PORT: ${port}`)})


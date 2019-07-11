const express = require('express')
const cors = require('cors')
const mongoose = require('./config/database')


const app = express()
// const port = 3003

const path = require("path");
	const port = process.env.PORT || 3003
	

const router = require('./app/controllers/c-controller')
const {usersRouter} = require('./app/controllers/userController')
app.use(express.json())
app.use(cors())
app.use('/contacts', router)
app.use('/users', usersRouter)
app.use(express.static(path.join(__dirname,"contact-app/build")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname + "/contact-app/build/index.html"))
})


app.get('/', (req,res) =>{
    res.json('welcome')
})

app.listen(port, () => {
    console.log("listening to port",port)
})

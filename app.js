const express = require("express")
const dotenv = require("dotenv")
const mongoose= require("mongoose")
dotenv.config()
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
const multer = require('multer')

const app = express()
const routes = require("./routes/posts")

app.use(express.json())

mongoose.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("Database connected")
}).catch(err => console.log("error is "+ err))

const storage = multer.diskStorage({
    destination:(req, file,cb)=>{
        cb(null, "images")
    },
    filename:(req,file,cb)=>{
        cb(null,"hello.jpg")
    }

})

const upload = multer({storage:storage})

app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json("File has been uploaded")
})

app.use('/api/auth', authRoute )
app.use('/api/users', userRoute )
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

app.listen(3000, ()=>{
console.log("Server running")
})
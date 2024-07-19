const express = require('express');
const app = express()
let port = 5000


const sendMail = require('./controller/sendMail')


app.get("/",(req,res)=>{
    res.send("A server file here")
})

app.get("/mail",sendMail)


const server = async ()=>{
    try {
        app.listen(port,()=>{
            console.log(`server is running on port ${port}`);

        })
        
    } catch (error) {
    }
}

server()
const express=require("express")
const app=express()
const path=require("path")
const http=require("http").createServer(app)
const {Server}=require("socket.io")
const io=new Server(http)

app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    return res.sendFile(path.join(__dirname,"index.html"))
})

io.on("connection",(socket)=>{
    socket.on("message",(message)=>{
        console.log(message)
        io.emit("message",message)
    })
})

http.listen(3000,()=>{
    console.log("listening on port 3000")
})
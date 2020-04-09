const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.get("/data" , (req,res) => {
    const fullPath = require("path").resolve(__dirname, "data" , "fake.json")
    const contents = require("fs").readFileSync(fullPath, {encoding : "utf-8"})
    res.setHeader("content-type" , "application/json")
    console.log(contents)
    res.send(contents).status(200)
})


app.get("*" , (req,res) => {
    res.send("hello").status(200)
})


const port = 3333;
app.listen(port,() => console.log("connected : " , port))
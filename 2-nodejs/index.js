const express = require("express");

const app = express();

app.get("/",(req,res) =>{
    res.send("Hi There, Akilan here!!!");
});

app.listen(5000,()=>{
    console.log("App is listening on port 5000");
});
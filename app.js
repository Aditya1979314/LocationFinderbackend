const express = require('express');

const app = express();

app.use(express.json());

app.post('/',(req,res)=>{
 const body = req.body;
 console.log(req.body);
 return res.status(200).json(body)
})

app.listen(3000,()=>{
    console.log("server is started")
})
import express from 'express'

const app= express();

app.listen(4001,()=>{
    console.log("server is running  praveen");
})

app.get('/praveen',(req,res)=>{
    res.send('your get request is working ');
})
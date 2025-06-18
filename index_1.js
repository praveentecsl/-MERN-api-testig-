import express from 'express'


const app= express();
app.use(express.json())

app.listen(4001,()=>{
    console.log("server is running  praveen");
})

app.get('/praveen',(req,res)=>{
    res.send('your get request is working ');
})

app.get('/chandu',(re,ro)=>{
    ro.send('oh man your get is okey');
})

app.post('/submit',(req,res)=>{
    console.log('you pass the data as : ',req.body);
    res.send('I got your data');
})
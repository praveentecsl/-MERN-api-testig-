import express from 'express'

const app= express();
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/submit',(req,res) =>{
    console.log('received post request',req.body);
    res.send('data received successfully');
})

app.listen(4000,()=>{
    console.log("server is running ");
});
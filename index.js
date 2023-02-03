const express = require('express');
const app = express();

app.use('/',(req,res)=>{
    res.send('Hello world!');
})

app.listen(8000, ()=>{
    console.log('listening on http://localhost:8000/')
})
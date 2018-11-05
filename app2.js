const express = require('express');
const app = express();

let port  = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send('yes this is home page');
})

app.get('/check',(req,res)=>{
    res.send('check page');



})


app.listen(port);






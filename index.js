require('dotenv').config()
const express = require('express')
const app=express()
const PORT =3001;

app.get('/' , (req,res)=>{
    res.send('hello world');
})


app.listen(process.env.PORT , ()=>[
    console.log(`server started at PORT ${PORT}`)
])

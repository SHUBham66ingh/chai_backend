import express from 'express';

const app=express();

app.get('/' , (req,res)=>{
  res.send('server is ready')  
})

app.get('/api/jokes' , (req,res)=>{
    const joke = [
        {
            id:1,
            title:'A joke',
            content : 'this is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content : 'this is a joke'
        },
        {
            id:3,
            title:'A joke',
            content : 'this is a joke'
        },
        {
            id:4,
            title:'A joke',
            content : 'this is a joke'
        },
        {
            id:5,
            title:'A joke',
            content : 'this is a joke'
        },
    ]
})

const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
     console.log(`server started at port ${PORT}`)
})




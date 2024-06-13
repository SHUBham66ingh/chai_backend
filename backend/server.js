import express from 'express';

const app=express();

app.get('/' , (req,res)=>{
  res.send('server is ready')  
})

app.get('/jokes' , (req,res)=>{
    const jokes = [
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
            title:'A third joke',
            content : 'this is a third joke'
        },
        {
            id:4,
            title:'A fourth joke',
            content : 'this is a fourth joke'
        },
        {
            id:5,
            title:'A fifth joke',
            content : 'this is a fifth joke'
        },
    ]
    res.send(jokes);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
     console.log(`server started at port ${PORT}`)
})




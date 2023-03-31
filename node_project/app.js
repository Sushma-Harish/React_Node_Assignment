const express = require("express");
const bodyParser=require("body-parser")
const app=express();
const port=3000;
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.post('/users',(req,res,next)=>{
   const { name,email,age }=req.body;
   res.send(`user ${name} with email ${email} and age ${age} created successfully`)

if(!name|| !email|| !age){
    const error=new Error('please provide a name,email and id');
    error.statusCode=400;
    return next(error);
}
res.status(201).json({message:'user created successfully'});
})

app.use((error,req,res,next)=>{
    res.status(error.statusCode(500).json({error:error}))
});
app.listen(port,()=>{
    console.log(`server listening on http://localhost:${port}`);
});
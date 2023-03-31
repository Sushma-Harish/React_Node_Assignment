const express=require("express");
const app=express();
const port=3001;
const fs=require("fs");
app.get("/movies",(req,res)=>{
    fs.readFile('movies.json',(err,data)=>{
        if(err){
            console.log(err);
            return res.send(500).json({message:"Internal server error"});
        }
        const movies=JSON.parse(data);
        res.json(movies);
    });
});

app.listen(port,()=>console.log(`listening on port ${port} `));
const express=require("express");
const categoryRouter=require('./categoryrouter')
const PORT=4001
const app=express();
app.use('/api',categoryRouter)
app.get('/',(req,res)=>{
    res.send('API is running fine')
});
app.listen(PORT,()=>{
    try{
        console.log('server is running on Port No. 4001')
    }
    catch(err){
           console.log('error occured during starting the live error',err)
    }
  
})
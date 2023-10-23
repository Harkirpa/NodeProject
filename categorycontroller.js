const blog=require("./dummydata")
// const{bollywood,hollywood,fitness,technology,food}=require('./dummydata')
const homeController=(req,res)=>{
   return res.send(blog)
}
// const bollywoodController=(req,res)=>{
//     const id=req.params.id
//       const data=bollywood.find((item)=>item.id==id)
//       console.log(data)
//     return res.send(bollywood)
// }
// const hollywoodController=(req,res)=>{
//     return res.send(hollywood)
// }
// const fitnessController=(req,res)=>{
//     return res.send(fitness)
// }
// const technologyController=(req,res)=>{
//     return res.send(technology)
// }
// const foodController=(req,res)=>{
//     return res.send(food)
// }
module.exports=homeController
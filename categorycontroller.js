const{bollywood,hollywood,fitness,technology,food}=require('./dummydata')

const bollywoodController=(req,res)=>{
    const id=req.params.id
      const data=bollywood.find((item)=>item.id==id)
      console.log(data)
    return res.send(data)
}

const hollywoodController=(req,res)=>{
    return res.send(hollywood)
}

const fitnessController=(req,res)=>{
    return res.send(fitness)
}
const technologyController=(req,res)=>{
    return res.send(technology)
}
const foodController=(req,res)=>{
    return res.send(food)
}
module.exports={bollywoodController,hollywoodController,fitnessController,technologyController,foodController}
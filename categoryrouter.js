const {home,bollywoodController,hollywoodController,fitnessController,technologyController,foodController} =require('.//categorycontroller')

const categoryRouter=require("express").Router();

// categoryRouter.get("/bollywood",bollywoodController)
// categoryRouter.get("/hollywood",hollywoodController)
// categoryRouter.get("/fitness",fitnessController)
// categoryRouter.get("/technology",technologyController)
// categoryRouter.get("/food",foodController)
categoryRouter.get("/",home)
module.exports=categoryRouter;
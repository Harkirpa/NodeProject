const homeController =require('./categorycontroller')

const categoryRouter=require("express").Router();

// categoryRouter.get("/bollywood",bollywoodController)
// categoryRouter.get("/hollywood",hollywoodController)
// categoryRouter.get("/fitness",fitnessController)
// categoryRouter.get("/technology",technologyController)
// categoryRouter.get("/food",foodController)
categoryRouter.get("/blog",homeController)
module.exports=categoryRouter;
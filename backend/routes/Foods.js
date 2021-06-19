const router = require("express").Router();
const { response } = require("express");
let Food = require("../models/Food.js");

router.route("/add").post((req,res)=>{

      const name= req.body.name;
      const price=Number(req.body.price);

      const newFood = new Food({

        name,
        price,
        
      })

newFood.save().then(()=>{

    res.json("Food item Added")
}).catch((err)=>{
    console.log(err);
})
     
} )


router.route("/").get((req,res)=>{

    Food.find().then((foods)=>{
        res.json(foods)
    }).catch((err)=>{
        console.log (err)
    })

})

router.route("/update/:id").put(async(req, res)=>{

    let userId = req.params.id;
    const {name,price} = req.body;

    const updateFood = {
        name,
        price,
    }  

    const update = await Food.findByIdAndUpdate(userId,updateFood).then(()=>{

        res.status(200).send({status:"Food item Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.messsage});
    })

})


router.route("/delete/:id").delete(async (req,res)=>{

    let userId = req.params.id;

    await Food.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Food item deleted"})
    }).catch((err)=>{

        console.log(err.messsage);
        res.status(500).send({status: "Error with deleting food item", error: err.messsage});

    })

})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

   const item =  await Food.findById(userId).then((food)=>{
        res.status(200).send({status: "Food item fetched",food})  
    }).catch((err)=>{

        console.log(err.messsage);
        res.status(500).send({status: "Error with fetching food item", error: err.messsage});

    })
})

module.exports = router;
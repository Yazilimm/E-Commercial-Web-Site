const Order = require("../models/Order.js");
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken");
const router = require("express").Router();


//Create

router.post("/", verifyToken, async (req,res) =>{
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err)
    }
})

//Update
 router.put("/:id",verifyTokenAndAdmin, async (req,res)=>{
     try {
         const updateOrder = await Order.findByIdAndUpdate(req.params.id,
            {
             $set : req.body
         },
         {new:true}
         );
         res.status(200).json(updateOrder)
     } catch (err) {
        res.status(500).json(err)
    }
});

//Delete
router.delete("/:id",verifyTokenAndAdmin, async (req,res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order Deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get User Orders
router.get("/find/:id", async (req,res)=>{
    try {
        const orders= await Order.find({userId : req.params.userId});
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get All
router.get("/",verifyTokenAndAdmin, async (req,res)=>{
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router
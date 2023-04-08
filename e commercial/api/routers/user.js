const User = require("../models/User");
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken");
const router = require("express").Router();

//Update
router.put("/:id",verifyTokenAndAuthorization, async (req,res)=>{
    if(rq.body.password){
        req.body.password = CryptoJs.AES.encrypt(
            req.body.password, process.env.PASS_SEC
        ).toString();
    }
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },{new:true})
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(500).json(err)
    }
});

//Delete
router.delete("/:id",verifyTokenAndAuthorization, async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get User
router.get("/find/:id",verifyTokenAndAdmin, async (req,res)=>{
    try {
        const user = await User.findByIdAnd(req.params.id);
        const {password, ...others} = user._doc;

        res.status(200).json({...others});
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get All User
router.get("/",verifyTokenAndAdmin, async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router
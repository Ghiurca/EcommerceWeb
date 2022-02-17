
const router = require("express").Router();
const Subs = require("../models/Subs");

//Subscribe
router.post("/subscribe", async (req,res)=>{
    const newSubs = new Subs({
        email:req.body.email,
    });
try{
    const savedSubs = await newSubs.save();
res.status(201).json(savedSubs);
}catch(err){
    res.status(500).json(err);
}
});
module.exports = router;
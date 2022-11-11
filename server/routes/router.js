const express=require("express");
const router= express.Router();
const users=require("../models/userSchema");

// router.get("/",(req,res)=>{
//     console.log("connect");
// });

// Register data
router.post("/register",async(req,res)=>{
    //console.log(req.body);
    const {name,email,age,mobile,work,add,desc}=req.body;

    if(!name||!email||!age||!mobile||!work||!add||!desc){
        res.status(404).json("please fill all the details");
    }

    try {
        const preuser= await users.findOne({email:email});
        console.log(preuser);
        if(preuser){
            res.status(404).json("this user is already existed");
        }else{
            const adduser= new users({
                name,email,age,mobile,work,add,desc
            
            });
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }
    } catch (error) {
        res.status(404).json(error);
    }
})

//get user data

router.get("/getdata",async(req,res)=>{
    try {
        const userdata= await users.find();
        res.status(201).json(userdata);
        console.log(userdata);
    } catch (error) {
        res.status(404).json(error);
    }
    
})

//get individual userdata

router.get("/getindividualuser/:id", async(req,res)=>{
    try {
    console.log(req.params);
    const {id}=req.params;
    const individualuser= await users.findById({_id:id});
    console.log(individualuser);
    res.status(201).json(individualuser);

    } catch (error) {
        res.status(404).json(error);
    }
    
})

//update user data

router.patch("/updateuserdata/:id", async(req,res)=>{
    try {
        const {id}=req.params;
        console.log(id);
        const updateuser= await users.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.status(201).json(updateuser);
    } catch (error) {
        res.status(422).json(error);
    }
})

//delete user

router.delete("/deleteuser/:id", async(req,res)=>{
    try {
        const {id}= req.params;
        console.log(id);
        const deleteuser= await users.findByIdAndDelete({_id:id});
        res.status(201).json(deleteuser);
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports= router;
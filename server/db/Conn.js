const mongoose= require("mongoose");

const DB= "mongodb+srv://prashanth:Prash%4029@cluster0.uhrhaot.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection start")).catch((error)=>console.log(error.message));
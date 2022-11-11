require("dotenv").config();
const express=require("express");
const app= express();

const mongoose= require("mongoose");
const cors=require("cors");
const router= require("./routes/router");
app.use(cors());
app.use(express.json());
app.use(router);

require("./db/Conn");
const users= require("./models/userSchema");
const port=8003;


app.listen(port,()=>{
    console.log("Server is running on port number ${port}");
});
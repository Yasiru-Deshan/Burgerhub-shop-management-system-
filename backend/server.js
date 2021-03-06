const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express(); 
require("dotenv").config();

const PORT = process.env.PORT||8070;

app.use(cors());


app.use(express.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
       useCreateIndex: true,
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useFindAndModify: false
});


const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("Mongodb connection success!");
});

const foodRouter = require("./routes/Foods.js");
const Food = require("./models/Food.js");
   


app.use("/Food",foodRouter);


app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
});
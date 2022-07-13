const express = require('express');
const mongoose = require('mongoose');
const router = require("./routers/bookRoutes");

const app = express();

//middleware
app.use(express.json());
app.use("/books",router) //localhost:5000/books

mongoose.connect(
    "mongodb+srv://piumi:123@cluster0.mz3tvhh.mongodb.net/bookStore?retryWrites=true&w=majority"
    ).then(()=> console.log("DataBase Connected Success!!"))
      .then(()=>{
          app.listen(8070)
      }).catch((err)=>console.log(err));




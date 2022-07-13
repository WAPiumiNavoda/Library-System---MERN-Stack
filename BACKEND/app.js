const express = require('express');
const mongoose = require('mongoose');

const app = express();

//middleware
app.use('/',(req,res,next)=>{
    res.send("This is our starting app")
})

mongoose.connect(
    "mongodb+srv://piumi:123@cluster0.mz3tvhh.mongodb.net/bookStore?retryWrites=true&w=majority"
    ).then(()=> console.log("Connected Success!!"))
      .then(()=>{
          app.listen(8070)
      }).catch((err)=>console.log(err));




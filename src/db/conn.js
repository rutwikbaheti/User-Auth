const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userAuth",{
    
}).then(()=>{
    console.log("DB connection successful.......")
}).catch((e)=>{
    console.log(e)
});

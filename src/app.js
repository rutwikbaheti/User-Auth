const express = require('express');
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000
require("./db/conn")
const Register = require("./models/registeration")
const template_path = path.join (__dirname,"../templates/views")
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set("view engine","hbs");
app.set("views",template_path);

app.get("/",(req ,res)=>{
    res.render("index");
})

app.post("/",(req ,res)=>{
    console.log(req.body);
    const user = new Register(req.body);
    user.save().then(()=>{
        res.status(201).render("home");
    }).catch((e)=>{
        res.status(400).send(e);
    })
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",async(req ,res)=>{
    try{
        const email = req.params.email;
        const password = req.params.password;
        const userdata= await Register.find({email : email}) && await Register.find({password:password})
        if(!userdata){
            return res.status(404).send()
        }else{
            res.render("home");1
        }
    }catch(e){
        res.send(e)
    }
})
app.listen(port,()=>{
    console.log("server is running.......")
})
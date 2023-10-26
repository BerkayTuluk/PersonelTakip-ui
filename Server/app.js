const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const pertakStore = require("./models/pertakModel.js");
const registerStore = require("./models/registerModel.js");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
const logger = require("./logger.js");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

//port işlemi
const app = express();

app.use(express.json());
app.use(cors());

//mongoose bağlantısı
mongoose
  .connect(
    "mongodb+srv://berkayt:0147@pertak.sezn5gb.mongodb.net/PerTak?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      //useUnifiedTopology: true,
      //useCreateIndex: true,
    }
  )
  .then(console.log("Connected to Database"))
  .catch((err) => console.log(err));

//verilerin Databaseden çekılip gösterilmesi
app.get("/works", (req, res) => {
  pertakStore.find().then((works) => res.json(works));
});



//newworker a istekte bulunulduğunda yeni bir işçi ve is tanımlanır
app.post("/newWorker", async (req, res) => {
  try {
    const newWorker = new pertakStore({
      workerName: req.body.workerName,
      department: req.body.department,
      quantity: req.body.quantity,
      jobName: req.body.jobName,
      comments: req.body.comments,
    });
    const worker = await newWorker.save();
    res.status(200).json(worker);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  pertakStore.findByIdAndDelete({ _id: id }, (err) => {
    if (!err) {
      console.log("works deleted");
    } else {
      console.log(err);
    }
  });
});

app.put("/lend/:id", async (req, res) => {
  try {
    await pertakStore.findByIdAndUpdate(req.params.id, {
      $inc: { quantity: -1 },
    });
  } catch (err) {
    console.log(err);
  }
});

app.put("/back/:id", async (req, res) => {
  try {
    await pertakStore.findByIdAndUpdate(req.params.id, {
      $inc: { quantity: 1 },
    });
  } catch (err) {
    console.log(err);
  }
});

//Register
require("./models/registerModel")

const User =mongoose.model("UserInfo");
app.post("/register",async(req,res)=>{

  const{fname,email,password}=req.body
  const encryptedPassword=await bcrypt.hash(password,10)
  try {
      //const oldUser = User.findOne({email});
     //if(oldUser){
      //   return res.json({error:"User Exists"})
      //}
    await User.create({
      fname,
      email,
      password: encryptedPassword,
    });
    res.send({status:"Ok"})
  } catch (error) {
    res.send({status:"Error"})
  }
})

app.listen(5000, () => {
  console.log("Server Çalisti");
});


app.post("/login-user", async(req,res)=>{
  const User =mongoose.model("UserInfo");
  const {email,password}=req.body

  User.findOne({email:email}, (err,user) => {
    if(user){
      if(password===user.password){        
      res.send({message:"Login Successfull",user:user})      
    }else{
      res.send({message:"Password didn't match"})
    }
  }else{
    res.send({message:"User not registered"})
  } 
  })

});



//LOG işlemi
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

const Logger =createLogger({

  format: combine(
    label({ label: 'Log Kayıt Bilgisi' }),
    timestamp(),
    prettyPrint()
  ),
 transports: [
    new transports.File({
      filename: 'combined.log',
      level: 'info'
    }),
    new transports.File({
      filename: 'error.log',
      level: 'error'
    })
  ]
})
Logger.log({
  level: 'info',
  message: 'Kod Değişiklik Zamanı'
});




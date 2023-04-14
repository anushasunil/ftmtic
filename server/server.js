const express=require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(cors())
const User = require("./model/User");
console.log("hello")
// DB Config
const db = require('./config/key').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

 


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/register",(req,res)=>{
    const userDetails=new User({
        name:req.body.name,
        email:req.body.email,
       
    })
    userDetails.save().then(userDetails=>{
        if(userDetails){
            res.status(200).json({
                message: "Your details  added successfully",
            })
        }
    }).catch(e => {
        console.log(e)
        res.status(500).json({
            message: e.message,
        })
    })

})


const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));



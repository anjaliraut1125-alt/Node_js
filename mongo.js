const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]); 


const express = require("express");
const mongoose =  require("mongoose");

const app = express();

mongoose.connect(
    "mongodb+srv://anjaliraut1125_db_user:anjali%402002@cluster0.7jn8k9z.mongodb.net/?appName=Cluster0"
    
).then(()=>{
    console.log("Mongodb Connected Suceessfully!");
}).catch((err)=>{
    console.log("Connection Failed!");
    // console.log(err.message);
    console.error(err);
});

app.use(express.json())

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },

    email:{
        type:String,
        required: true,
        unique: true
    },
    
    age:{
        type:Number,
        required:true
    }
})

const User = mongoose.model("User", UserSchema);

// By POST = create user = Naya data add karna
app.post("/users" , async(req , res)=>{
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
    }
    catch(err){
        res.status(500).json(err.message);
    }
})

//BY GET = find show all users = Data dekhna (read)
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err.message);
    }
});


//single user

app.get("/users/:id", async(req , res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    }

    catch{
        res.json("user not Found");
    }
})


//

app.listen(8000, ()=>{
    console.log("Server is running on port number 8000.");
});
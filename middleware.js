//global middleware example

const express = require("express");
const app = express();

// const logger = (req , res , next) => {
//     console.log("Request Received");
//     next();
// };

// app.use(logger);

// app.get("/" , (req , res)=>{
//     res.send("Home Page (Global Middleware)");
// });

// app.get("/about" , (req , res)=>{
//     res.send("About Page!");
// });


// app.listen(4000);
  

//Route middleware example(single middleware)
const checkUser = (req , res , next)=> {
    console.log("Checking User");
    next();
};

app.get("/dashboard" , checkUser , (req , res)=> {
    res.send("Dashboard");
});

app.listen(4000);



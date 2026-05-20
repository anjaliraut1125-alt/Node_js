const express = require('express');

const app = express();

app.get('/', (req , res)=> {
    res.send("Hello World!");
});


// types of routes
// GET ROUTE


app.get("/students", (req , res)=>{
    res.send("Student List");
});

// //POST ROUTE 

app.post("/students", (req , res)=>{
    res.send("Student Added");
});

// //PUT ROUTE
app.put("/students", (req , res)=>{
    res.send("Student Updated");
});

// //DELETE ROUTE
app.delete("/students", (req , res)=>{
    res.send("Student Deleted");
});


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});



const express = require('express');

// const app = express();

// app.get('/', (req , res)=> {
//     res.send("Hello World!");
// });


// app.listen(5000,()=>{
//     console.log("Server is running on port 5000");
// });



// types of routes
const app = express();

app.get("/students", (req , res)=>{
    res.send("Student List");
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});

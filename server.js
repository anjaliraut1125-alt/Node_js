const http = require('http');

// const server = http.createServer((req , res)=>{
//     res.write("Welcome to Node Js Server!!");
//     res.end();
// });

const server = http.createServer((req , res)=>{
    if (req.url === '/'){
        res.end("Home Page");

    } else if (req.url === '/about'){
        res.end("About US");

    }else {
        res.end("404 Page Not Found");
    }
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000");

});
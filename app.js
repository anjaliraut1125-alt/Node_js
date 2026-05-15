console.log("hello duniya");

console.log("start");


const math = require('./math');

console.log(math.sub(5,3));
console.log(math.add(5,3));



const fs = require('fs');
//Read File
// fs.readFile('data.txt', 'utf-8' , (err ,data)=>{
//     console.log(data);
// });

// Write File
// fs.writeFile('data.txt' , 'Hello Anjali!!! Here Learn Node JS', (err)=>{
//     console.log("File Created");   
// });


//Append File

fs.appendFile('data.txt' , '\nHello Everyone here this is append file' , (err)=>{

    console.log("Data Added");
});








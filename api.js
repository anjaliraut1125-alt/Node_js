const express =  require("express");

const app = express();

app.use(express.json());

let students = [
    {id : 1 , name: "Anjali"},
    {id : 2 , name: "Aarti"},
    {id : 3 , name: "Akhil"},
    {id : 4 , name: "Aarav"}

];

//GET API

app.get("/students" , (req , res)=> {
    res.json(students);
});


//POST API

app.post("/students" , (req , res)=>{

    const newStudent = req.body;

    students.push(newStudent);

    res.json({
        message: "Student Added",
        data: students
    });
});


//PUT 
app.put("/students/:id" , (req , res)=> {

    const id = req.params.id;
    students  = students.map(student => {

        if(student.id == id){
            student.name = req.body.name;
        }
        return student;
    });

    res.json({
        message: "Student Updated",
        data: students
    });
});


//DELETE API

app.delete("/students/:id" , (req , res)=>{

    const id = req.params.id;

    students = students.filter(student => student.id != id);

    res.json({
        message: "Student Deleted",
        data: students
    });
});


app.listen(7000);
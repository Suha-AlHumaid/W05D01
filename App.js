const express = require("express"); //to create express app
const app = express(); //envo express
const port = 5000; //set port
app.use(express.json()) //Json data


const toDos = [
    { name: "Sleep", isComplete: false , id: 0 },
    { name: "Eat", isComplete: false , id: 1},
    { name: "sleep Again", isComplete: false, id: 2 },
];

//to show todos data
app.get("/todos", (req, res) => {
    res.status(200)
    res.json(toDos)
});

//to add new task
app.post("/create", (req, res) => {
    const { name, isComplete ,id} = req.body;
    toDos.push({ name, isComplete , id });
    res.status(201),
     res.json({ name, isComplete ,id });
  });



//Search by name
app.get("/searchByName/:name", (req, res) => {
    const { name } = req.query;
    const found = toDos.find((elem) => {
      return elem.name === name;
    });
    if (found) {
      res.status(200);
      res.json(found);
    } else {
      res.status(404);
      res.json("Task is not found");
    }
  });
  //Search by id
app.get("/searchById/:id", (req, res) => {
    const { id } = req.query;
    const found = toDos.find((elem) => {
      return elem.id === Number(id);
    });
    if (found) {
      res.status(200);
      res.json(found);
    } else {
      res.status(404);
      res.json("Task is not found");
    }
  });

  //delete list by id
app.delete("/deleteByID/:id", (req, res) => {
    const { id } = req.params;
    toDos.forEach((elem,i)=>{ 
        if(elem.id === Number(id)){
            toDos.splice(i,1)
       }
    })
 
    res.status(200);
    res.json(toDos);
  });

  //delete list by name of task
  app.delete("/deleteByName/:name", (req, res) => {
    const { name } = req.params;
    toDos.forEach((elem,i)=>{ 
        if(elem.name === name){
            toDos.splice(i,1)
        }
    })
 
    res.status(200);
    res.json(toDos);
  });

  //Update list by id
app.put("/updateByID/:id/:name",(req,res)=>{
    const id = req.params.id;
    const name =req.params.name;
    toDos.forEach((elem)=>{
        if(elem.id === Number(id)){
            elem.name =name
        }
    })   
    res.status(200);
    res.json(toDos);
})

  //Update list by name
  app.put("/updateByName/:name/:newName",(req,res)=>{
    const name =req.params.name;
    const newName = req.params.newName;
    toDos.forEach((elem)=>{
        if(elem.name === name){
            elem.name =newName 
        }
    })   
    res.status(200);
    res.json(toDos);
})


app.listen(port, () => {
    console.log(`server is running ${port}`);
  });
const express = require("express"); //to create express app
const app = express(); //call express
const PORT = 5000; //set port best praktise in capital letter
app.use(express.json()); //Json data

let toDos = [
  { name: "Sleep", isComplete: false, isDele: false, id: 0 }, //elem.name
  { name: "Eat", isComplete: false, isDele: false, id: 1 }, //elem
  { name: "sleep Again", isComplete: false, isDele: false, id: 2 }, //elem
];

///show todos data
app.get("/todos", (req, res) => {
  res.status(200).json(toDos);
});

// get task by by query
app.get("/todo/", (req, res) => {
  try {
    const { id } = req.query;
    const todo = toDos.find((elem) => elem.id == id); // elem.id === Number(id)
    if (todo) {
      res.status(200).json(toDos);
    } else {
      res.status(400).json("not found");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

////add new task
app.post("/todo", (req, res) => {
  let newId = toDos.length;
  const { name, isComplete, isDele } = req.body;
  toDos.push({ name, isComplete, isDele, id: newId });
  res.status(200).json(toDos);
});

  //Update list by id
  app.put("/todo/:id", (req,res)=>{
    const {id}= req.params
    const {name} = req.body
    toDos.forEach(elem =>{
    if(elem.id == id) {
      elem.name = name
    }
    })
    res.status(200).json(toDos)
    })

      
  //Soft delete
  app.put("/delete/:id", (req,res)=>{
    const {id} = req.params
    toDos.forEach(elem=>{
      if(elem.id == id){
        elem.isDele = true
      }
    })
    res.status(200).json(toDos)
    })

////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});

const express = require("express"); //to create express app
const app = express(); //call express
const PORT = 5000; //set port best praktise in capital letter
app.use(express.json()); //Json data

let toDos = [
  { name: "Sleep", isDele: false, id: 0 }, //elem.name
  { name: "Eat", isDele: false, id: 1 }, //elem
  { name: "sleep Again", isDele: false, id: 2 }, //elem
];

///show todos data
app.get("/todos", (req, res) => {
  res.status(200).json(toDos);
});


  // get task by by query
  app.get("/todo/",(req,res)=>{
    const {id }= req.query
    const arr = toDos.find(elem=> elem.id == id) // elem.id === Number(id)
    res.status(200).json(arr)
    })

////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});

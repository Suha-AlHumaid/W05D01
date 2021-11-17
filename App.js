const express = require("express"); //to create express app
const app = express(); //call express
const PORT = 5000; //set port best praktise in capital letter
app.use(express.json()) //Json data


////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});


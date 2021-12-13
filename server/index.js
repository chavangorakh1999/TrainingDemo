const express= require('express')
var cors = require('cors')
const app = express();


const PORT= process.env.PORT || 8080;

 
app.use(cors())
app.get("/", (req, res) => {
    res.send({message:"You are listening server on port "+ PORT})
})

app.listen(PORT,()=>{
    console.log("Server listening on port " + PORT);
})
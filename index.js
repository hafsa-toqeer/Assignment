const express = require("express");
const auth = require("./routes/auth.routes");

const app = express()
const port = 3000;
app.use(express.json())

const mongoose = require("./helper/db-helper")
mongoose();

app.use('/api',auth);

app.listen(port, ()=>{
    console.log("-------------->Working", port);
})


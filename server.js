const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());
app.use(cors());

//connection
mongoose.connect('mongodb+srv://wesllen:master.12@cluster0-pzrfc.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir('./src/models');


app.use('/api', require("./src/routes"));

app.listen(3001);
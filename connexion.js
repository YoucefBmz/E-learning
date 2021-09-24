const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to DB !!!");
  })
  .catch((err) => {
    console.log("there is an error in DB : ...", err);
  });

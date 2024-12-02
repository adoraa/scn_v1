const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
require('dotenv').config()

//routes
async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("SCN Admin server!");
  });
}

main().then(() => console.log("MongoDb connected successfully!")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors({
    // origin: ['http://localhost:5173', 'https://book-app-frontend-tau.vercel.app'],
    origin: ['http://localhost:5173'],
    credentials: true
}))

//routes
const productRoutes = require("./src/products/product.route");
app.use("/api/products", productRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("SCN Admin server!");
  });
}

main()
  .then(() => console.log("MongoDb connected successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

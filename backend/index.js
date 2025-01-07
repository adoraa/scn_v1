const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["https://scn-v1.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);

//routes
const productRoutes = require("./src/products/product.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

//home route for testing
app.get("/", (req, res) => {
  res.send("SCN Admin server is running!");
});

//MongoDB connection
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

// async function main() {
//   await mongoose.connect(process.env.DB_URL);
//   app.use("/", (req, res) => {
//     res.send("SCN Admin server is running!");
//   });
// }

// main()
//   .then(() => console.log("MongoDb connected successfully!"))
//   .catch((err) => console.log(err));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

main();

// Export the app (required by Vercel)
module.exports = app;

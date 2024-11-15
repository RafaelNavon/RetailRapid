import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import path from "path";
import fs from "fs";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
    fs.readFile("products.json", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      // Parse the JSON data
      const products = JSON.parse(data);

      // Get a reference to the MongoDB database
      const db = mongoose.connection;
      // Access the 'products' collection in the database
      const collection = db.collection("products");

      // Insert each product into the 'products' collection
      products.forEach((product) => {
        collection.insertOne(product, function (err) {
          if (err) {
            console.error(err);
            return;
          }
        });
      });
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express(express);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serv at http://localhost:${port}`);
});

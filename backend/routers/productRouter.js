import express from "express";
import { data } from "../data.js";

import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  // the root here refers to the products because this is a router to product root, the app.use('/products) in the  server points to it.
  const products = await Product.find({});
  res.send(products);
});

// productRouter.get("/seed", async (req, res) => {
//   const createdProducts = await Product.insertMany(data.products);
//   res.send({ createdProducts });
// });

productRouter.get("/:id", async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
    return;
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

export default productRouter;

import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/OrderModel.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();
orderRouter.get(
  "/mine",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user.id });
    res.send(orders);
  })
);

orderRouter.post(
  "/",
  isAuth, // by calling isAuth as a second param here, req.user will be filled with info comming from decode in our utils.js file.
  expressAsyncHandler(async (req, res) => {
    if (req.body.newOrder.orderItems.length === 0) {
      res.status(400).send({ message: "Cart is empty" });
    } else {
      const order = new Order({
        orderItems: req.body.newOrder.orderItems,
        shippingAddress: req.body.newOrder.shippingAddress,
        paymentMethod: req.body.newOrder.paymentMethod,
        itemsPrice: req.body.newOrder.itemsPrice,
        shippingPrice: req.body.newOrder.shippingPrice,
        taxPrice: req.body.newOrder.taxPrice,
        totalPrice: req.body.newOrder.totalPrice,
        user: req.user.id,
        isPaid: true,
        paidAt: Date.now(),
        paymentResult: {
          id: req.body.details.id,
          status: req.body.details.status,
          update_time: req.body.details.update_time,
          email_address: req.body.details.email_address,
        },
      });

      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: "New Order Created", order: createdOrder });
    }
  })
);

orderRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Order not found" });
    }
  })
);

export default orderRouter;

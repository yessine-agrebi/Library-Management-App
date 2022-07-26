import express from "express";
const router = express.Router();
import {
  getAllOrders,
  getOrderByUser,
  postCreateOrder,
  postUpdateOrder,
  postDeleteOrder,
} from "../controllers/order.controller.js";

router.get("/", getAllOrders);
router.get("/:id", getOrderByUser);

router.post("/", postCreateOrder);
router.put("/:id", postUpdateOrder);
router.delete("/:id", postDeleteOrder);

export default router;

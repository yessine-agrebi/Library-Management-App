import express from "express";
const router = express.Router();
import stripe from "stripe";
const Stripe = stripe(
  "sk_test_51LPizIJrml64tMYMHOPCjRo1fQyMGbrvp7ZnefGR40aG8uP95R2kgz75uxpz8UEjcLN2BtP9XmFS3Z2g15xvDYYn006GLQZORZ"
);
router.post("/", async (req, res) => {
  console.log(req.body);
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
    });
    status = "success";
  } catch (error) {
    console.log(error);
    status = "Failure";
  }
  res.json({ error, status });
});
export default router;

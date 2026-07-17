import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const PORT = process.env.PORT || 5000;

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Vision AI Pro Plan",
            },
            unit_amount: 4900,
          },
          quantity: 1,
        },
      ],

      mode: "payment",

      success_url: "https://vision-landing-site.vercel.app/payment-success",
cancel_url: "https://vision-landing-site.vercel.app/payment-cancel",
    });

    res.json({
      url: session.url,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: err.message,
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
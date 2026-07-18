import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

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
      success_url:
        "https://vision-landing-site.vercel.app/payment-success",
      cancel_url:
        "https://vision-landing-site.vercel.app/payment-cancel",
    });

    res.status(200).json({
      url: session.url,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
}
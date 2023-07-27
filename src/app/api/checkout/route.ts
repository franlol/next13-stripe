import { NextResponse } from "next/server"
import Stripe from "stripe";

export const POST = async (request) => {
  const price = await request.json();

  const stripe = new Stripe(process.env.STRIPE_API_SECRET as string, { apiVersion: "2022-11-15" });

  const session = await stripe.checkout.sessions.create({
    mode: price.type === "recurring" ? "subscription" : "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price: price.id,
        quantity: 1
      }
    ],
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/pricing",
  })

  return NextResponse.json({ url: session.url })
}

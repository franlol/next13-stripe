import { NextResponse } from "next/server"
import Stripe from "stripe"

export const GET = async () => {
	const stripe = new Stripe(process.env.STRIPE_API_SECRET);

	const prices = await stripe.prices.list()


	return NextResponse.json({
		data: prices.data
	})
}
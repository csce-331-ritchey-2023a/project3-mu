"use client";
import React from "react";
import { TotalPriceSelector } from "../../store/features/cartSlice";
import { useAppSelector } from "../../store/store";
import Link from "next/link"
export default async function Complete() {
  //const data = use(getItems())
  //console.log(data)
    const cartItems = useAppSelector(
        (state:any) => state.cart.cartItems
      );
    const itemIds = cartItems.map((item:any) => item.id);
    const itemIdsString = itemIds.join('/');
    console.log("api/"+itemIdsString+"\n")
		try {
			const res = await fetch(
        "/api/Checkout/"+itemIdsString, {cache: "no-store"}
			);
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
  return (
      <main className="bg-primary h-screen flex flex-col justify-center items-center">
          <Link href={"/customer"}
            className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors duration-300 border border-white">Return to Order Screen
          </Link>
        <div className="text-3xl font-bold text-center">
          <h1>Order Complete!</h1>
        </div>
      </main>
  )
}

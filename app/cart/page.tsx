"use client";
import CartItemCard from "../../components/CartItemCard";
import React from "react";
import { TotalPriceSelector } from "../../store/features/cartSlice";
import { useAppSelector } from "../../store/store";
import Link from "next/link";


const CartPage = () => {
  const cartItems = useAppSelector(
    (state:any) => state.cart.cartItems
  );
  const Checkout = async () => {
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
	};
 
  
  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <body className="p-2 bg-primary">
      {cartItems.map((item:any) => (
          <CartItemCard cartItem={item} />
      ))}

      <p className="text-slate-600">
        Total Price:{" "}
        <span className="text-slate-900 font-bold">
        ${totalPrice}
        </span>
      </p>
      <div className="flex justify-center items-center">
          <button className="mx-auto rounded-lg bg-red-500 hover:bg-gray-500 py-2 px-4 text-white ">
            <Link href="/customer">Order More</Link>  
          </button>
          <button className="mx-auto rounded-lg bg-red-500 hover:bg-gray-500 py-2 px-4 text-white " onClick={Checkout}>
            <Link href="/Complete">Checkout</Link>
          </button>         
      </div>
      <button></button>
    </body>
  );
};

export default CartPage;
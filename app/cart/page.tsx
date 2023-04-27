"use client";
import CartItemCard from "../../components/CartItemCard";
import React from "react";
import { TotalPriceSelector } from "../../store/features/cartSlice";
import { useAppSelector } from "../../store/store";
import { use } from "react";
import { Provider } from "react-redux";

const CartPage = () => {
  const Checkout = async () => {
		try {
			const res = await fetch(
        `${process.env.BASE_URL}/api/Checkout/221`, {cache: "no-store"}
			);
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

  const cartItems = useAppSelector(
    (state:any) => state.cart.cartItems
  );
  console.log(cartItems)
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
      <div>
          <button className="justify-center hover-grey " onClick={Checkout}>Checkout</button>        
      </div>
    </body>
  );
};

export default CartPage;
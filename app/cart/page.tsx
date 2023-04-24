"use client";
import CartItemCard from "../../components/CartItemCard";
import React from "react";
import { TotalPriceSelector } from "../../store/features/cartSlice";
import { useAppSelector } from "../../store/store";

const CartPage = () => {
  const cartItems = useAppSelector(
    (state:any) => state.cart.cartItems
  );

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
        <h1 className="flex justify-center">Checkout</h1>
      </div>
    </body>

  );
};

export default CartPage;
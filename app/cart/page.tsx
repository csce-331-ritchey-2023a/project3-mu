"use client";
import CartItemCard from "../../components/CartItemCard";
import React from "react";
import { TotalPriceSelector } from "../../store/features/cartSlice";
import { useAppSelector } from "../../store/store";
import { use } from "react";
import { Provider } from "react-redux";

async function Checkout(slug:string){
  let res = await fetch("http://localhost:3000/api/Checkout/"+ slug, {cache: "no-store"})
  //console.log(`${process.env.BASE_URL}/api/getItem/`+params)
  if(!res.ok){
    console.log(res)
  }
  return await(res).json()
};

const CartPage = () => {
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
        <h1> Checkout</h1>
          <button className="flex justify-center" onClick={use(Checkout("221"))}>Checkout</button>        
      </div>
    </body>

  );
};

export default CartPage;
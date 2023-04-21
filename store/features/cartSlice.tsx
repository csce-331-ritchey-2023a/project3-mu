import { CartItem, Product } from "@/interfaces";
import { createSlice, PayloadAction, createSelector, current } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartState{
    cartItems:CartItem[];
}

const initialState: CartState = {
    cartItems:[],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment:(state,action:PayloadAction<Product>)=>{
            
            const item = state.cartItems.find(
                (el)=>el.product.id === action.payload.id
            );

            if(item) item.qty++;
            
            else{
                state.cartItems.push({
                    product:action.payload,
                    qty: 1,
                });
            }
        },

        decrement:(state, action:PayloadAction<Product>)=>{
            const item = state.cartItems.find(el=>el.product.id === action.payload.id);
            if(item) {
                item.qty--;
                if(item.qty === 0){
                    state.cartItems = state.cartItems.filter(
                        (el)=>el.product.id !== action.payload.id
                    );
                }
            }
        }
    }
})

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;

const cartItems = (state: RootState)=> state.cart.cartItems;

const totalCartItemsSelector = createSelector([cartItems], (cartItems)=>
    cartItems.reduce((total:number,curr:CartItem) => (total+= curr.qty),0)
);

export const totalPriceSelector = createSelector([cartItems],(cartItems)=>
    cartItems.reduce((total:number,curr:CartItem)=>(total+= curr.qty*curr.product.price),0)
);

export const productQtySelector = createSelector(
    [cartItems,(cartItems, productId:number)=>productId],
    (cartItems, productId) => cartItems.find(
        (el:any)=>el.product.id ===productId)?.qty
);
import React, { createContext, useState } from "react";
import { products } from "../forever-assets/assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext=createContext(null);

 export const ShopContextProvider=(props)=>{
    const currancy='$';
   const deliver_fee=10;
   const [search,setSearch]=useState('')
   const [showsearch,setShowSearch]=useState(false)
   const [cartItem,setCartItem]=useState({})
    //  const navigate=useNavigate();
   
     const AddToCart= async(itemID,size)=>{
        if (!size) {
            toast.error("Select size")
        }
      let cartData=structuredClone(cartItem);
      if (cartData[itemID]) {
        if (cartData[itemID][size]) {
            cartData[itemID[size]]+=1
        } else{
            cartData[itemID][size]=1
        }
      }else{
        cartData[itemID]={}
        cartData[itemID][size]=1
      }
      setCartItem(cartData)
     }
     
     const getCartCount = () => {
        let totalCount = 0;
        for (const itemCategory in cartItem) {
            for (const itemId in cartItem[itemCategory]) {
                try {
                    if (cartItem[itemCategory][itemId] > 0) {
                        totalCount += cartItem[itemCategory][itemId];
                    }
                } catch (error) {
                    console.error('Error calculating cart count:', error);
                }
            }
        }
        return totalCount;
    };
    const updateQauntity=async (itemID,size,qauntity)=>{
    let cartData=structuredClone(cartItem)
    cartData[itemID][size]=qauntity
    setCartItem(cartData)
    }
    const getTotalAmount = () => {
        let totalAmount = 0;
        
        for (const items in cartItem) {
          // Find the product in the products array using the item's _id
          let itemInfo = products.find((product) => product._id === items);
          
          if (!itemInfo) continue; // Skip if the product is not found
      
          // Iterate over sizes in the cartItem[items]
          for (const size in cartItem[items]) {
            try {
              if (cartItem[items][size] > 0) {
                // Add the price multiplied by the quantity of the specific size
                totalAmount += itemInfo.price * cartItem[items][size];
              }
            } catch (error) {
              console.error("Error calculating total for size:", size, error);
            }
          }
        
        
        return totalAmount;
      };
      
        }
    

    

    const value={
        products,currancy,deliver_fee,search,
        setSearch,showsearch,setShowSearch,
        cartItem,AddToCart,getCartCount,
        updateQauntity,getTotalAmount,

    }
    return(
        <ShopContext.Provider value={value}>
           {props.children}
        </ShopContext.Provider>
    )
}
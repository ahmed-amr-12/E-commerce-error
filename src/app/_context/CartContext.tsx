"use client";

import { getCartData } from '@/Actions/getCartData';
import React, { createContext, useEffect, useState } from 'react'


 export let CartContext = createContext({})

export default function CartContextProvider({children}: {children: React.ReactNode}) {

    
const [cartData, setCartData] = useState(null);
const [numOfCartItems, setNumOfCartItems] = useState(0);
const [cartId, setCartId] = useState(null);

async function getData (){

    
 const userDataCart = await getCartData()

console.log(userDataCart);


setCartData(userDataCart.data)
setNumOfCartItems(userDataCart.numOfCartItems)
setCartId(userDataCart.data._id)
}


useEffect (   function(){

getData()
}, [])


  return <CartContext.Provider value={{ cartData, setCartData, numOfCartItems, setNumOfCartItems, cartId, setCartId }}>
  
  
  {children}
  

  </CartContext.Provider>
  
}

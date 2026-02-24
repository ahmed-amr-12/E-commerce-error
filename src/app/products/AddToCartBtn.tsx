"use client";

import { AddItemToCarts } from "@/Actions/AddToCarts";
import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import { toast } from "sonner";
import { CartContext } from "../_context/CartContext";

export default function AddToCartBtn({ productId }: { productId: string }) {
  const { cartData , setCartData, numOfCartItems, setNumOfCartItems } =
    useContext(CartContext);

  async function HandleAddItem() {
    const data = await AddItemToCarts(productId);

    if (data.status == "success") {
      toast.success("Item added to cart successfully", {
        position: "top-center",
      });
      setNumOfCartItems(data.numOfCartItems);
      setCartData(data.data);
    } else {
      toast.error("Failed to add item to cart", { position: "top-center" });
    }
  }

  return (
    <>
      <Button
        onClick={HandleAddItem}
        className=" text-white  bg-slate-800"
        variant="outline"
      >
        <i className="fa-solid fa-plus bg"></i> Add To Cart
      </Button>
    </>
  );
}

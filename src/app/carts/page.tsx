"use client";

import React, { useContext } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { CartContext } from "../_context/CartContext";
import { UpdateCount } from "./UpdateCount.action";
import { toast } from "sonner";
import { set } from "zod";
import { clearCart, deleteItem } from "./deleteItem.action";

export default function CartPage() {
  const { cartData, numOfCartItems, setNumOfCartItems, setCartData } =
    useContext(CartContext);

  if (!cartData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-500">
          Loading cart...
        </h2>
      </div>
    );
  }

  async function handleCountUpdate(productId: string, count: number) {
    const res = await UpdateCount(productId, count);

    toast.success("Cart updated successfully");
    setCartData(res.data);
    setNumOfCartItems(res.numOfCartItems);
  }

  async function handleDeleteItem(productId: string) {
    const res = await deleteItem(productId);

    // console.log(res);
    setCartData(res.data);
    setNumOfCartItems(res.numOfCartItems);
    toast.success("Item removed from cart");
  }

  async function handleClearCart() {
    const res = await clearCart();

    setCartData(null);
    setNumOfCartItems(0);
    toast.success("Cart cleared successfully");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            {cartData?.products.map((item: any) => (
              <Card key={item._id} className="rounded-xl shadow-sm border">
                <CardContent className="flex items-center justify-between p-6">
                  {/* Product Info */}
                  <div className="flex items-center gap-6">
                    <img
                      src={item.product.imageCover}
                      alt={item.product.title}
                      className="w-24 h-24 object-contain"
                    />

                    <div className="space-y-2">
                      <h2 className="font-semibold text-lg">
                        {item.product.title}
                      </h2>

                      <p className="text-sm text-gray-500">
                        {item.product.brand?.name}
                      </p>

                      <p className="text-sm text-gray-400">
                        {item.product.category?.name}
                      </p>

                      <div className="flex items-center border rounded-md w-fit">
                        <button
                          className="px-3 py-1 hover:bg-gray-100"
                          onClick={() =>
                            handleCountUpdate(item.product._id, item.count - 1)
                          }
                        >
                          <Minus size={16} />
                        </button>

                        <span className="px-4 text-sm">{item.count}</span>

                        <button
                          className="px-3 py-1 hover:bg-gray-100"
                          onClick={() =>
                            handleCountUpdate(item.product._id, item.count + 1)
                          }
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price + Remove */}
                  <div className="flex flex-col items-end justify-between h-full">
                    <p className="text-green-600 font-semibold text-lg">
                      ${item.price}
                    </p>

                    <button
                      className="flex items-center gap-1 text-red-500 text-sm hover:underline"
                      onClick={() => handleDeleteItem(item.product._id)}
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Bottom Actions */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-indigo-600 text-sm hover:underline"
              >
                ← Continue Shopping
              </Link>

              <Button
                onClick={handleClearCart}
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-50"
              >
                <Trash2 className="mr-2" size={16} />
                Clear Cart
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <Card className="rounded-xl shadow-sm border p-6">
              <h2 className="font-semibold text-lg mb-6">Order Summary</h2>

              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>Total Items</span>
                <span>{numOfCartItems}</span>
              </div>

              <div className="flex justify-between font-semibold text-lg mb-6">
                <span>Total Price</span>
                <span className="text-indigo-600">
                  ${cartData.totalCartPrice}
                </span>
              </div>

   <Link href="/payment">
  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-6 text-base w-full">
    Checkout
  </Button>
</Link>
              <p className="text-xs text-gray-400 text-center mt-4">
                Taxes and shipping calculated at checkout
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

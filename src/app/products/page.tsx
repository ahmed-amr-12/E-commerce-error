
import getAllProducts from "@/Actions/gatProducts";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";
import WishlistBtn from './../wishlistBtn/wishlistBtn';

export default async function Products() {
  const products = await getAllProducts();

  return (
    <>
      <h1 className="font-bold text-center p-5 mt-6 text-2xl">
        Product Page
      </h1>

      <div className="container my-5 mx-auto md:w-[80%]">
        <div className="flex flex-wrap gap-5 justify-center">
          {products.map((product: any) => (
            <Card
              key={product._id}
              className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3 shadow-md hover:shadow-lg transition"
            >
              <WishlistBtn productId={product._id} />

              <Link href={`/products/${product._id}`}>
                <Card className="p-3 cursor-pointer hover:scale-[1.02] transition">
                  <CardHeader>
                    <CardTitle>
                      <img
                        src={product.imageCover}
                        alt={product.title}
                        className="w-full h-40 object-contain"
                      />
                    </CardTitle>

                    <CardDescription>
                      {product.category?.name}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="font-bold line-clamp-1">
                      {product.title}
                    </p>
                  </CardContent>

                  <CardFooter>
                    <div className="flex justify-between w-full items-center">
                      <h5 className="font-semibold">
                        {product.price} EGP
                      </h5>

                      <p className="flex items-center gap-1 text-sm">
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        {product.ratingsAverage}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </Link>

              <div className="mt-3">
                <AddToCartBtn productId={product._id} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
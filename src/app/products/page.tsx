import getAllProducts from "@/API/gatProducts";
import { log } from "console";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Products() {
  let products = await getAllProducts();

  console.log(products);

  return (
    <>
      <h1>product page</h1>
      <div className="container mx-auto md:w-[80%]">
        <div className="flex flex-wrap">
          {products.map((product: any) => {
            return (
              <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3">

                <Link href={`/products/${product._id}`}>
                  <Card className="p-3">
                    <CardHeader>
                      <CardTitle>
                        <img src={product.imageCover} alt="" />
                      </CardTitle>
                      <CardDescription>{product.category.name}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-bold line-clamp-1">{product.title}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex justify-between w-full">
                        <h5>{product.price} EGP</h5>
                        <p>
                          <i className="fa-solid fa-star text-yellow-400"></i>
                          {product.ratingsAverage}
                        </p>
                      </div>
                    </CardFooter>
                    <Button variant="outline">
                      {" "}
                      <i className="fa-solid fa-plus"></i> Add To Cart{" "}
                    </Button>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

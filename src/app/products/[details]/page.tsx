import getSingleProduct from "@/API/getSingleProduct";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import React from "react";

export default async function Details({ params }: any) {
  let { details } = params;

  // console.log(details);

console.log(params);


  let data = await getSingleProduct(details);
  if (!data) {
    return <span className="loader"></span>;
  }
  
  console.log(data);

  return (
    <div className="">
      <h2>product details</h2>

      <div className="container w-[80%] mx-auto  ">
        <div className="flex  gap-5  items-center">
          <div className="w-full md:w-1/4">
            <img src={data.imageCover} alt="" />
          </div>
          <div className="w-full md:w-3/4 mt-3 ">
            <h2 className="mt-3">{data.title}</h2>
            <p className="mt-3">{data.description}</p>
            <h4 className="mt-3">Category: {data.category.name}</h4>

            <CardFooter>
              <div className="flex justify-between w-full">
                <h5 className="mt-3">{data.price} EGP</h5>
                <p className="mt-3">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  {data.ratingsAverage}
                </p>
              </div>
            </CardFooter>
            <Button
              className="w-full mt-3 bg-slate-900 text-white"
              variant="outline"
            >
              {" "}
              <i className="fa-solid fa-plus"></i> Add To Cart{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

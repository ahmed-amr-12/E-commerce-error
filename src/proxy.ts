// import { getToken } from 'next-auth/jwt'
// import { NextRequest, NextResponse } from 'next/server'
// import React from 'react'

// export default async  function middleware(req :NextRequest) {
 

// const jwt =await getToken({req})

//  console.log("jwt " , jwt );


//  if (jwt != null) {
 
//     return NextResponse.next()
// }

// return NextResponse.redirect("http://localhost:3000/login")

// }

//  export const config = {
//     matcher : [ "/cart" , "/products" ,  "/profile" , "/categories" ,"/brands" ]
// }

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
  const jwt = await getToken({ req });

  console.log("jwt", jwt);

  if (jwt) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/Login", req.url));
}

export const config = {
  matcher: [
    { source: "/carts" },
    { source: "/products" },
    { source: "/profile" },
    { source: "/categories" },
    { source: "/brands" },
  ],
};

"use server";

import { LoginType } from "@/app/schemas/LoginSchema";
import { cookies } from "next/headers";

 export async function MyLogin(values:LoginType ) {    
     let res = await fetch(`https://linked-posts.routemisr.com/users/signin`, {
      body: JSON.stringify(values),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

    });
    let finalRes = await res.json();

const myCookies = await cookies()
myCookies.set("token", finalRes.token,{

    maxAge:60*60*24  ,
    httpOnly:true,

} 
)

console.log(finalRes);
}
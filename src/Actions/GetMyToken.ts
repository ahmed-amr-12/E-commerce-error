"use server"

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers"

export async function GetMyToken() {


const myCookies = await cookies()
const TokenFromCookies = myCookies.get("next-auth.session-token") ?.value

console.log("TokenFromCookies", TokenFromCookies);

const decodedToken =  await decode({ token: TokenFromCookies, secret: process.env.NEXTAUTH_SECRET! })
console.log(decodedToken);

return decodedToken.realTokenFromApi;


}
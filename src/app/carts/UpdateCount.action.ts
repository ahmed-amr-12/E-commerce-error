"use server"
import { GetMyToken } from "@/Actions/GetMyToken";
import axios from "axios";

export async function UpdateCount(productId: string, count: number) {


const token =  await GetMyToken()

const { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {

count 
}, {
  headers: {
    token: token as string
  },


})


return data

}
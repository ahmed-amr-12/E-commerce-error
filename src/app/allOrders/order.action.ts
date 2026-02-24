"use server"

import { GetMyToken } from "@/Actions/GetMyToken"
import axios from "axios"
import { jwtDecode } from "jwt-decode";

export async function getUserOrder() {

const token =  await GetMyToken()



const userData = jwtDecode(token as string)

const {data} =await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userData.id}`,)



return {data, userData}
}
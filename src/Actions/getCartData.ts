"use server";
import axios from "axios";
import { GetMyToken } from "./GetMyToken";

export async function getCartData() {
  try {
    const token = await GetMyToken();

    console.log("TOKEN:", token);

    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers: {
          token: token,
        },
      }
    );

    return data;
  } catch (error: any) {
    console.log("GET CART ERROR:", error.response?.data || error.message);
    throw error;
  }
}
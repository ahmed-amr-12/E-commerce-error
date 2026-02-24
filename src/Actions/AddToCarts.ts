"use server";

import axios from "axios";
import { GetMyToken } from "./GetMyToken";

export async function AddItemToCarts(productId: string) {
  try {
    const token = await GetMyToken();

    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/cart",
      { productId },
      {
        headers: {
          token: token,
        },
      }
    );

    return data;
  } catch (error: any) {
    console.log("SERVER ERROR:", error.response?.data || error.message);
    throw error;
  }
}
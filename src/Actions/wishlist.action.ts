"use server";

import axios from "axios";
import { GetMyToken } from "@/Actions/GetMyToken";

const baseURL = "https://ecommerce.routemisr.com/api/v1/wishlist";

// ✅ GET
export async function getWishlist() {
  const token = await GetMyToken();

  const { data } = await axios.get(baseURL, {
    headers: { token },
  });

  return data;
}

// ✅ ADD
export async function addToWishlist(productId: string) {
  const token = await GetMyToken();

  const { data } = await axios.post(
    baseURL,
    { productId },
    { headers: { token } }
  );

  return data;
}

// ✅ REMOVE
export async function removeFromWishlist(productId: string) {
  const token = await GetMyToken();

  const { data } = await axios.delete(
    `${baseURL}/${productId}`,
    {
      headers: { token },
    }
  );

  return data;
}
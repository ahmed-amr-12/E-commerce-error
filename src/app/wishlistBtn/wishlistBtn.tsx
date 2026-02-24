"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { addToWishlist, removeFromWishlist,  } from "@/Actions/wishlist.action";

export default function WishlistBtn({ productId }: any) {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleWishlist() {
    setLoading(true);

    if (liked) {
      await removeFromWishlist(productId);
      setLiked(false);
    } else {
      await addToWishlist(productId);
      setLiked(true);
    }

    setLoading(false);
  }

  return (
    <button onClick={handleWishlist} disabled={loading}>
      <Heart
        className={`w-6 h-6 transition ${
          liked ? "fill-red-500 text-red-500" : "text-gray-400"
        }`}
      />
    </button>
  );
}
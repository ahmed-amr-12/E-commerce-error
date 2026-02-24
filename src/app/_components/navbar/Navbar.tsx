'use client';

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { Button } from '@/components/ui/button';
import { useContext } from "react";
import { CartContext } from "@/app/_context/CartContext";

export default function Navbar() {

function handleSignOut() {
  signOut({ redirect: true, callbackUrl: "/Login" });
}



const { cartData, numOfCartItems } = useContext(CartContext)



  let session = useSession()


  return (
    <nav className="w-full bg-slate-600 border-b shadow-sm ">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between ">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          RouteShop
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-white font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-blue-600 transition">
              Products
            </Link>
          </li>
          {/* <li>
            <Link href="/categories" className="hover:text-blue-600 transition">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/brands" className="hover:text-blue-600 transition">
              Brands
            </Link>
          </li> */}
          <li>
            <Link href="/carts" className="hover:text-blue-600 transition">
              Carts
            </Link>
          </li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          
          {/* Cart */}
          <Link href="/carts" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {numOfCartItems}
            </span>
          </Link>

     {session.status === "authenticated" ? (
            <Button
              onClick={handleSignOut}
              className="text-sm font-medium bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Sign Out
            </Button>
          ) : 
            <>
              <Link
                href="/Login"
                className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="text-sm font-medium bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Register
              </Link>
            </>
}

        </div>
      </div>
    </nav>
  );


}



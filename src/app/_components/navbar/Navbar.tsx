'use client';

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          RouteShop
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/home" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-blue-600 transition">
              Products
            </Link>
          </li>
          <li>
            <Link href="/categories" className="hover:text-blue-600 transition">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/brands" className="hover:text-blue-600 transition">
              Brands
            </Link>
          </li>
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
              0
            </span>
          </Link>

          {/* Auth */}
          <Link
            href="/login"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

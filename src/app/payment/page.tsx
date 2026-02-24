"use client";

import { useContext, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import {
  creatCashOrder,
  creatVisaOrder,
  ShippingAddresstype,
} from "./payment.actions";
import { CartContext } from "../_context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
      type: "cash",
    },
  });
  const { cartId, setNumOfCartItems, setCartData } = useContext(CartContext);

  const [paymentMethod, setPaymentMethod] = useState("cash");

  async function handlePayment(values: any) {
    console.log("Cart ID ", cartId);
    try {
      const userData: ShippingAddresstype = {
        shippingAddress: {
          city: values.city,
          details: values.details,
          phone: values.phone,
        },
      };

      if (paymentMethod === "cash") {
        const res = await creatCashOrder(cartId, userData);

        if (res?.status === "success") {
          setNumOfCartItems(0);
          setCartData(null);

          toast.success("Order created successfully ");

          router.push("/allOrders");
        }
      } else {
        const res = await creatVisaOrder(cartId, userData);
        window.open(res.session.url, "_blank");
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong ");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <h2 className="text-4xl font-semibold text-center mb-10">Payment</h2>

        <form onSubmit={handleSubmit(handlePayment)}>
          <Card className="p-6 space-y-6 shadow-md rounded-xl">
            <CardContent className="space-y-6">
              {/* Details */}
              <div className="space-y-2">
                <Label>Details</Label>
                <Input
                  {...register("details", {
                    required: "Details is required",
                  })}
                  placeholder="Enter your details"
                />
                {errors.details && (
                  <p className="text-red-500 text-sm">
                    {errors.details.message as string}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input
                  type="tel"
                  {...register("phone", {
                    required: "Phone is required",
                  })}
                  placeholder="Enter your phone"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">
                    {errors.phone.message as string}
                  </p>
                )}
              </div>

              {/* City */}
              <div className="space-y-2">
                <Label>City</Label>
                <Input
                  {...register("city", {
                    required: "City is required",
                  })}
                  placeholder="Enter your city"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">
                    {errors.city.message as string}
                  </p>
                )}
              </div>

              {/* Payment Method */}
              <div className="space-y-3">
                <Label>Payment Method</Label>

                <div
                  onClick={() => setPaymentMethod("cash")}
                  className={`border rounded-lg p-4 cursor-pointer transition ${
                    paymentMethod === "cash"
                      ? "border-black bg-gray-100"
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={paymentMethod === "cash"}
                      readOnly
                    />
                    <span>Cash on Delivery</span>
                  </div>
                </div>

                <div
                  onClick={() => setPaymentMethod("online")}
                  className={`border rounded-lg p-4 cursor-pointer transition ${
                    paymentMethod === "online"
                      ? "border-black bg-gray-100"
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={paymentMethod === "online"}
                      readOnly
                    />
                    <span>Pay Online (Visa)</span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
              >
                {isSubmitting ? "Processing..." : "Pay NOW"}
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}

"use client";
// Import local components
import { Button } from "@/components/ui/button";

//Import react components
import { FC } from "react";
// import { useState } from "react";

// Import Stripe components
import { useShoppingCart } from "use-shopping-cart";

/* Start of the component */
const CheckoutButton: FC<{ status: string; setStatus: Function }> = ({
  status,
  setStatus,
}) => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    incrementItem,
    decrementItem,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleClick(cartCount: any) {
    // event.preventDefault();

    // shouldDisplayCart?.addEventListner(function(e){
    //     if (e.oldValue != e.newValue) {
    //         // value changed!

    if (cartCount > 0) {
      setStatus("loading");
      try {
        const result = await redirectToCheckout();
        if (result?.error) {
          console.error(result);
          setStatus("redirect-error");
        }
      } catch (error) {
        console.error(error);
        setStatus("redirect-error");
      }
    } else {
      setStatus("no-items");
    }
    // }
    //})
  }

  return (
    <>
      <div className="text-red-700 text-xs mb-3 h-5 text-center">
        {totalPrice && totalPrice < 30
          ? "You must have at least £0.30 in your basket"
          : cartCount && cartCount > 20
          ? "You cannot have more than 20 items"
          : status === "redirect-error"
          ? "Unable to redirect to Stripe checkout page"
          : status === "no-items"
          ? "Please add some items to your cart"
          : null}
      </div>

      <Button
        className="w-full"
        onClick={() => {
          console.log("checkout");
          console.log(`the cart count is`, cartCount);
          console.log(`the status is`, status);

          console.log(cartDetails);

          handleClick(cartCount);
        }}
        // disabled={
        //   (totalPrice && totalPrice < 30) || (cartCount && cartCount > 20)
        //   ||
        //   status == "no-items"
        //     ? true
        //     : false
        //}
      >
        Checkout
      </Button>
    </>
  );
};

export { CheckoutButton };

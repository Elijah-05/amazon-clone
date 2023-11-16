import { useAtom, useAtomValue } from "jotai";
import React from "react";
import { cartItems, user } from "../../atoms";
import CartList from "../../component/cart_list";

const Payment = () => {
  const [cart, setCart] = useAtom(cartItems);
  const userData = useAtomValue(user);

  return (
    <div className="mb-20">
      <h1 className=" text-center p-4 text-2xl font-medium bg-gray-300">
        Checkout (2 items)
      </h1>
      <div className="bg-white">
        <div className=" max-w-7xl mx-auto ">
          <div className="flex flex-col sm:flex-row ">
            <div className="p-4  shrink-0 w-full sm:w-[150px]">
              <h1 className=" text-center sm:text-left font-bold">
                Delivery Address
              </h1>
            </div>
            <div className="p-4  w-full">
              <h1 className="text-center sm:text-left">
                {userData?.email} 123 Street Line Chicago,
              </h1>
            </div>
          </div>
          <div className=" h-[2px] bg-gray-500 my-2 mx-2" />
          <div className="flex flex-col sm:flex-row ">
            <div className="p-4  shrink-0 w-full sm:w-[150px]">
              <h1 className=" text-center sm:text-left font-bold">
                Review items and delivery
              </h1>
            </div>
            <div className="p-2  grid gap-4 w-full">
              {cart?.map((item) => {
                return <CartList item={item} />;
              })}
            </div>
          </div>
          <div className=" h-[2px] bg-gray-500 my-2 mx-2" />
          <div className="flex flex-col sm:flex-row ">
            <div className="p-4  shrink-0 w-full sm:w-[150px]">
              <h1 className="font-bold text-center sm:text-left">
                Payment Method
              </h1>
            </div>
            <div className="p-4  w-full">
              <h1 className="text-center sm:text-left">
                {userData?.email} 123 Street Line Chicago,
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

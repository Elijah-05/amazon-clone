import { useAtom, useAtomValue } from "jotai";
import React, { useEffect, useMemo, useState } from "react";
import { cartItems, priceInCart, user } from "../../atoms";
import CartList from "../../component/cart_list";
import { useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../../component/button/button";
import currencyFormatter from "../../utilities/currency_formatter";
import instance from "./axios";
import { db } from "../../firebase";

const Payment = () => {
  const [cart, setCart] = useAtom(cartItems);
  const totalCartPrice = useAtomValue(priceInCart);
  const userData = useAtomValue(user);
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);

  console.log("userData: ", userData.uid);

  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await instance.post(
        `/payments/create?total=${Math.floor(totalCartPrice * 100)}`
      );
      setClientSecret(response.data.clientSecrete);
    };

    getClientSecret();
  }, [cart]);

  console.log("Client Secrete: ", clientSecret);

  function handleRemoveFromCart(id) {
    const idExcludedItems = cart.filter((item) => item.id != id);
    setCart(idExcludedItems);
  }

  function navigateToCheckout() {
    navigate("/checkout");
  }

  function handleChangeCardNumber(event) {
    setLoading(false);
    setDisable(event.empty);
    setError(!!event.error && event?.error?.message);
  }

  async function handleTransaction(e) {
    e.preventDefault();
    setLoading(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(userData?.uid)
          .collection("orders")
          .doc(paymentIntent?.id)
          .set({
            cartItems: cart,
            amount: paymentIntent?.amount,
            created: paymentIntent?.created,
          });

        console.log("Payment Set Info: ", paymentIntent);

        setLoading(false);
        setError(null);
        setCart([]);
        navigate("/orders");
      });
  }

  return (
    <div className="mb-56">
      <h1 className=" text-center p-4 text-2xl font-medium bg-gray-300">
        Checkout (
        <span
          className="cursor-pointer text-blue-700"
          onClick={navigateToCheckout}
        >
          {cart.length} items
        </span>
        )
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
                {userData?.email} Adwa Avenue, Addis Ababa
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
            <div className="p-2  grid gap-2 w-full">
              {cart?.map((item, i) => {
                return (
                  <CartList
                    item={item}
                    onClick={handleRemoveFromCart}
                    key={`${item.id}${i}`}
                  />
                );
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
            <div className="p-4 mx-auto sm:mx-0 w-full px-4 sm:w-96">
              <form onSubmit={handleTransaction} className="">
                <CardElement onChange={handleChangeCardNumber} />
                <p className="mb-3 mt-1  font-bold ">
                  Order Total:{" "}
                  {currencyFormatter({ value: totalCartPrice, prefix: "$" })}
                </p>
                <Button
                  label={"Buy now"}
                  onClick={null}
                  disabled={disable}
                  loading={loading}
                />

                <span className=" text-[13px] ml-1 text-red-500">{error}</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

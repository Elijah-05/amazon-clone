import React from "react";
import { useNavigate } from "react-router-dom";
import banner_Ad from "../../assets/image/ad_banner1.jpg";
import Button from "../../component/button/button";
import currencyFormatter from "../../utilities/currency_formatter";
import { useAtom, useAtomValue } from "jotai";
import { cartItems, priceInCart } from "../../atoms";
import CartList from "../../component/cart_list";

const Checkout = () => {
  const [cart, setCart] = useAtom(cartItems);
  const cartPrice = useAtomValue(priceInCart);
  const navigate = useNavigate();

  function handleRemoveFromCart(id) {
    const idExcludedItems = cart.filter((item) => item.id != id);
    setCart(idExcludedItems);
  }

  function proccedToPayment() {
    navigate("/payment");
  }

  return (
    <div className="w-full max-w-7xl mx-auto ">
      <div className="z-10 flex flex-col md:flex-row gap-2 sticky top-[-86px] md:top-[76px] p-2 w-full bg-white shadow-[0px_0px_35px_-15px_rgba(0,0,0,0.3)] mb-8">
        {/* Ad Side */}
        <div className=" h-[155px] flex flex-col justify-between">
          <div className="w-full">
            <img src={banner_Ad} alt="banner advertising" />
          </div>
          <div className="m-4 pb-2 border-b-[3px] border-gray-300">
            <h3 className=" text-xl font-medium">Hello,</h3>
            <h1 className=" font-bold text-xl">Your shopping Basket</h1>
          </div>
        </div>

        {/* Total Side */}
        <div className="flex flex-col justify-center rounded-lg gap-3 bg-gray-200 w-full md:min-w[450px] p-3 top-[150px]  ">
          <p className="text-lg">
            Subtotal ({cart.length} items):{" "}
            <span className=" font-bold">
              {currencyFormatter({ value: cartPrice, prefix: "$" })}
            </span>
          </p>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="">This order contains a gift</p>
          </div>
          <Button label={"Proceed to Checkout"} onClick={proccedToPayment} />
        </div>
      </div>

      {/* Cart Item List */}
      <div className="grid gap-5 mb-40">
        {cart.map((item, i) => {
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
  );
};

export default Checkout;

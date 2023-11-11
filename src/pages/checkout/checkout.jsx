import React from "react";
import banner_Ad from "../../assets/image/ad_banner1.jpg";
import Button from "../../component/button/button";
import currencyFormatter from "../../utilities/currency_formatter";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useAtom } from "jotai";
import { cartItems } from "../../atoms";

const Checkout = () => {
  const [cart, setCart] = useAtom(cartItems);

  const total_cart_price = cart
    .map((item) => item.price)
    .reduce((acc, cur) => acc + cur, 0);

  function handleRemoveFromCart(id) {
    const idExcludedItems = cart.filter((item) => item.id != id);
    setCart(idExcludedItems);
  }

  console.log("Total Price: ", total_cart_price);

  return (
    <div className="w-full max-w-7xl mx-auto ">
      <div className="z-10 flex flex-col md:flex-row gap-2 sticky md:top-[76px] p-2 w-full bg-white shadow-[0px_0px_35px_-15px_rgba(0,0,0,0.3)] mb-6">
        {/* Ad Side */}
        <div className="">
          <div className="w-full">
            <img src={banner_Ad} alt="banner advertising" />
          </div>
          <div className="m-4 pb-2 border-b-[3px] border-gray-300">
            <h3 className=" text-xl font-medium">Hello,</h3>
            <h1 className=" font-bold text-xl">Your shopping Basket</h1>
          </div>
        </div>

        {/* Total Side */}
        <div className="flex flex-col justify-center rounded-lg gap-3 bg-gray-200 w-full md:min-w[450px] p-3 ">
          <p className="text-lg">
            Subtotal ({cart.length} items):{" "}
            <span className=" font-bold">
              {currencyFormatter({ value: total_cart_price, prefix: "$" })}
            </span>
          </p>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="">This order contains a gift</p>
          </div>
          <Button label={"Proceed to Checkout"} />
        </div>
      </div>

      {/* Cart Item List */}
      <div className="grid gap-5 mb-40">
        {cart.map((item, i) => {
          return (
            <div
              className="group flex flex-col sm:flex-row gap-3 rounded-lg mx-3 bg-slate-100 p-1 hover:shadow-lg duration-300"
              key={item.id}
            >
              <div className="rounded-lg overflow-hidden h-60 w-full max-w-[250px] shrink-0">
                <img
                  className=" group-hover:scale-110 duration-300 object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="flex flex-col justify-between py-2 ">
                <div className="">
                  <p className=" font-medium ">{item.title}</p>
                  <p className=" font-bold text-lg group-hover:text-xl duration-300 ">
                    {currencyFormatter({ value: item.price, prefix: "$" })}
                  </p>
                  {Array(item.rate)
                    .fill()
                    .map((star, i) => (
                      <StarRateIcon className=" text-yellow-400" key={i} />
                    ))}
                </div>
                <div className=" w-full sm:w-56 mt-2">
                  <Button
                    label={"Remove from cart"}
                    onClick={() => handleRemoveFromCart(item.id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
import React from "react";
import Button from "../button/button";
import currencyFormatter from "../../utilities/currency_formatter";
import StarRateIcon from "@mui/icons-material/StarRate";

const CartList = ({ item, onClick }) => {
  return (
    <div className="group flex flex-col sm:flex-row gap-3 rounded-lg bg-white hover:bg-slate-100 p-1 border-2 border-gray-300 hover:shadow-lg duration-300">
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
        <div className=" w-full md:w-56 mt-2">
          <Button label={"Remove from cart"} onClick={() => onClick(item.id)} />
        </div>
      </div>
    </div>
  );
};

export default CartList;

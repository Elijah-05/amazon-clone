import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import Button from "../button/button";

const ProductCard = ({ title, price, rate, image, id, onClick }) => {
  const slicedTitle = title.length > 40 ? title.slice(0, 40) + "..." : title;

  const productData = {
    id,
    title,
    image,
    price,
    rate,
  };

  return (
    <div
      className=" w-full max-w-[350px] md:max-w-sm m-4 p-4 flex flex-col px-5 items-center justify-between shadow-[0px_0px_35px_-15px_rgba(0,0,0,0.3)] bg-white hover:scale-[1.03] duration-300 "
      key={id}
    >
      <div className=" w-full ">
        <p className="">{slicedTitle}</p>
        <p className=" text-lg">
          <span className="text-base">$</span>
          <span className=" font-bold">{price}</span>
        </p>
        <div className="">
          {Array(rate)
            .fill()
            .map((star, i) => (
              <StarRateIcon className=" text-yellow-400" key={i} />
            ))}
        </div>
      </div>
      <div className="group border-2 w-full overflow-hidden h-40 md:h-56 my-4">
        <img
          className="group-hover:scale-110 duration-300 object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full " onClick={() => onClick(productData)}>
        <Button label={"Add to Basket"} />
      </div>
    </div>
  );
};

export default ProductCard;

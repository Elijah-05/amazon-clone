import CartList from "../cart_list";
import moment from "moment/moment";
import currencyFormatter from "../../utilities/currency_formatter";
import { total_Cart_Price } from "../../utilities/total_cart_price";

const OrderCard = ({ orderData }) => {
  const {
    data: { created, cartItems },
    id,
  } = orderData;

  return (
    <div className=" relative max-w-5xl mx-auto w-full ">
      <div className=" bg-white p-6 pb-6 rounded-lg rounded-br shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <div className="">
            <h1 className=" text-2xl font-bold">Order</h1>
            <p className=" font-medium">
              {moment.unix(created).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
          </div>
          <p className=" text-sm font-serif">{id}</p>
        </div>
        <div className=" grid gap-3">
          {cartItems.map((item, i) => {
            return <CartList item={item} hideButton key={item?.id} />;
          })}
        </div>
      </div>
      <div className=" bg-yellow-400 w-fit px-8 mx-auto sm:float-right rounded-br-lg rounded-bl-lg py-3 ranslate-y-6 shadow-lg">
        <p className=" text-lg font-medium text-right ">
          Order Total:{" "}
          {currencyFormatter({
            value: total_Cart_Price(cartItems),
            prefix: "$",
          })}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;

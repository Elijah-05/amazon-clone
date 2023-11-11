import React from "react";
import Banner from "../../component/banner";
import ProductCard from "../../component/product_card";
import { useAtom } from "jotai";
import { cartItems } from "../../atoms";

const boxImage =
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v2._SY304_CB573698005_.jpg";
const product2 =
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg";
const product3 =
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg";
const product4 =
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg";
const product5 =
  "https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/March/mp_20230219_ff_desktopsinglecategory_desktop_379x304_1._SY304_CB612639047_.jpg";
const product6 =
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v8._SY304_CB573698005_.jpg";
const product7 =
  "https://images-na.ssl-images-amazon.com/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_1X_Furnitrure_v2._SY304_CB577544739_.jpg";

const Home = () => {
  const [cart, setCart] = useAtom(cartItems);

  function handleAddtoCart(value) {
    setCart([...cart, value]);
  }

  return (
    <div className=" pb-10">
      <Banner />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1  justify-items-center sm:grid-cols-2  lg:grid-cols-3 px-4 md:px-2 sm:gap-2 md:gap-4">
          <ProductCard
            id={1}
            title={"Nokia mobile original Phones in cheap price"}
            price={123.32}
            image={boxImage}
            onClick={handleAddtoCart}
          />
          <ProductCard
            id={2}
            title={"Gaming Power Desktop "}
            rate={3}
            price={1780.99}
            image={product2}
            onClick={handleAddtoCart}
          />
          <ProductCard
            id={3}
            title={"Tedy bear and pinguine with gift box"}
            price={23.5}
            rate={4}
            image={product3}
            onClick={handleAddtoCart}
          />
          <ProductCard
            id={4}
            title={
              "Bed table light having a smooth and attractive design Very compfortable for anyone so anyone can order from anywhre"
            }
            price={45}
            rate={3}
            image={product4}
            onClick={handleAddtoCart}
          />
          <ProductCard
            id={5}
            title={"Womens fashion wear style"}
            price={36}
            rate={5}
            image={product5}
            onClick={handleAddtoCart}
          />
          <ProductCard
            id={6}
            title={"female Shoe"}
            price={87}
            rate={4}
            image={product6}
            onClick={handleAddtoCart}
          />
          <ProductCard
            id={7}
            image={product7}
            title={"office Chair"}
            price={32.12}
            rate={2}
            onClick={handleAddtoCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

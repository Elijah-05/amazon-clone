import { useAtomValue } from "jotai";
import { user } from "../../atoms";
import { db } from "../../firebase";
import OrderCard from "../../component/order_card";
import { useEffect, useState } from "react";

const Orders = () => {
  const userData = useAtomValue(user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (userData) {
      db.collection("users")
        .doc(userData?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
  }, [userData]);

  console.log("Dataaaa: ", orders);

  return (
    <div className=" max-w-5xl mx-auto pt-6 mb-72 sm:px-3">
      <h1 className=" text-3xl font-bold text-center sm:text-left">
        Your Orders
      </h1>
      <div className="grid gap-10 mt-4">
        {orders?.map((order) => {
          return <OrderCard orderData={order} key={order?.id} />;
        })}
      </div>
    </div>
  );
};

export default Orders;

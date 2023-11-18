import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import MainLayout from "./layout/main_layout";
import Checkout from "./pages/checkout/checkout";
import LoginPage from "./pages/login/inde";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { user } from "./atoms";
import Payment from "./pages/payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./pages/orders";
import PageNotFound from "./pages/page_not_found";

const promise = loadStripe(
  "pk_test_51OD3ZwHeeBDcm0QrNT3JSEHZmqV9IMxAnvD0blrw66CSXsIZqBcem2ZbpsPRW31en6eGXq4jFtTLlc07z3fV8rKQ00NlDev1uu"
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment",
        element: (
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        ),
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const App = () => {
  const setUser = useSetAtom(user);

  useEffect(() => {
    auth?.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
  }, []);

  return (
    <RouterProvider
      router={router}
      fallbackElement={
        <div>
          <h1>This is Falback</h1>
        </div>
      }
    />
  );
};

export default App;

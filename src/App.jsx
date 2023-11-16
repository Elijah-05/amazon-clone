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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <div className=" h-screen border  border-red-500 flex justify-center items-center">
        <h2 className=" text-2xl">Page Not Found!</h2>
      </div>
    ),
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
        element: <Payment />,
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

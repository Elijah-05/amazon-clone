import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import MainLayout from "./layout/main_layout";
import Checkout from "./pages/checkout/checkout";
import LoginPage from "./pages/login/inde";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { user } from "./atoms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <div>
        <h2>Error Page Not Found!</h2>
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

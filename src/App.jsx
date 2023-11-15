import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import MainLayout from "./layout/main_layout";
import Checkout from "./pages/checkout/checkout";
import LoginPage from "./pages/login/inde";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // loader: ScrollTop(),
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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import MainLayout from "./layout/main_layout";
import Checkout from "./pages/checkout/checkout";

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

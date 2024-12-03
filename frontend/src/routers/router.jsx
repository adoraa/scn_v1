import { createHashRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/Products/CartPage";
import CheckoutPage from "../pages/Products/CheckoutPage";
import SingleProduct from "../pages/Home/SingleProduct";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct/>
      },
    ],
  },
]);

export default router;

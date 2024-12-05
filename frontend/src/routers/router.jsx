import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/Products/CartPage";
import CheckoutPage from "../pages/Products/CheckoutPage";
import SingleProduct from "../pages/Products/SingleProduct";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/Products/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageProducts from "../pages/dashboard/manageProducts/ManageProducts";
import AddProduct from "../pages/dashboard/addProduct/AddProduct";
import UpdateProduct from "../pages/dashboard/editProduct/UpdateProduct";
import UserDashboard from "../pages/dashboard/users/UserDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/user-dashboard",
        element: <PrivateRoute><UserDashboard/></PrivateRoute>
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "add-new-product",
        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
      },
      {
        path: "edit-product/:id",
        element: (
          <AdminRoute>
            <UpdateProduct />
          </AdminRoute>
        ),
      },
      {
        path: "manage-products",
        element: (
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;

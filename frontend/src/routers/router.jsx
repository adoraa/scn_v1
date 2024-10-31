import { createHashRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";

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
    ],
  },
]);

export default router;

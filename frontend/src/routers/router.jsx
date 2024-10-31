import { createHashRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import Login from "../components/Login";

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
    ],
  },
]);

export default router;

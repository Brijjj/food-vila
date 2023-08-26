import React from "react";
import Header from "./Header";
import Body from "./Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Cart from "../page/Cart";
import Error from "../page/Error";
import RestaurentMenu from "./ResturentMenu";
import Store from "../redux/Store";
import { Provider } from "react-redux";

const AppLayout = () => {
  return (
    <div>
      <Provider store={Store}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/resturent/:id",
        element: <RestaurentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

export default AppLayout;

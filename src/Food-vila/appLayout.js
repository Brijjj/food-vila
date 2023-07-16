import React from "react";
import Header from "./header";
import Body from "./Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Cart from "./cart";
import Error from "./error";
import RestaurentMenu from "./resturentMenu";
import Store from "../redux/store";
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

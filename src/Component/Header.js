import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItem = useSelector((store) => store.cart.cartItems);
  return (
    <div className="flex bg-violet-100 justify-between">
      <img
        className="w-20 h-20 my-3 ml-2"
        src="https://tse2.mm.bing.net/th?id=OIP.a-M3OK_FoGATSbF1PhdUyAAAAA&pid=Api&P=0&h=180"
        alt="this is an img"
        height={70}
        width={70}
      ></img>
      <div>
        <ul className="flex m-3 p-3 ">
          <li className="m-2 p-2  hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 p-2  hover:text-red-500">
            <Link to="/cart">Cart {Object.keys(cartItem).length}</Link>
          </li>
        </ul>
      </div>

    
    </div>
  );
};

export default Header;

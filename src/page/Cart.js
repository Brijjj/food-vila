import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/CartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const addFoodItem = (ele) => {
    dispatch(addItem(ele));
  };

  const removeFoodItem = (ele) => {
    dispatch(removeItem(ele));
  };
  return Object.keys(cartItem).length > 0 ? (
    <div>
      <div className="shadow-2xl mt-8 float-left w-[640px] ml-2  h-[1000px] ">
        <div className="flex ">
          <div className=" border-[1px] mt-[225px] ml-10 border-black w-64 h-40">
            <div className="text-left ml-3 p-2">
              <p className="font-bold">Address</p>
              <p className="font-sans text-sm mt-2 leading-[1.5]">
                SouthBopal , Ahemdabaad Gujrat -380058
              </p>
              <button className=" mt-3 text-center bg-black text-white font-serif text-lg p-1 h-10 border-2">
                Deliver hear
              </button>
            </div>
          </div>
          <div className=" border-[1px] mt-[225px] ml-10 border-black w-64 h-40">
            <div className="text-left ml-3 p-2">
              <p className="font-bold">Add New Address</p>
              <p className="font-sans text-sm mt-2 leading-[1.5]">
                Ahemdabaad Gujrat -380058
              </p>
              <button className=" mt-6 text-center bg-black text-white font-serif text-lg p-1 h-10 border-2">
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-2xl mt-8 float-right w-[480px] h-[1500px] mr-8">
        <p className="mt-5 pl-3 font-bold font-serif">
          Cart
          <span className="pl-48 font-sans">
            {Object.keys(cartItem).length} Item
          </span>
        </p>

        {Object.values(cartItem).map((ele, id) => {
          return (
            <div
              key={id}
              className="flex justify-between mr-24 ml-9 scroll-m-1"
            >
              <h4 className="grid mt-8 ml-5 ">{ele?.name}</h4>
              <div className=" flex  border-2  w-24  h-11 mt-6 ml-5">
                <button
                  onClick={() => addFoodItem(ele)}
                  className=" m-4 text-xl mt-3 text-orange-500"
                >
                  +
                  <span>
                    {cartItem?.[ele?.name]?.count > 0
                      ? cartItem?.[ele?.name]?.count
                      : 0}
                  </span>
                </button>
                <span className="mt-4 text-orange-500"></span>
                <button
                  onClick={() => removeFoodItem(ele)}
                  className=" m-4 text-2xl font-bold mt-2 text-orange-500"
                >
                  -
                </button>
                <hr></hr>
              </div>

              {(ele?.price / 100) * cartItem?.[ele?.name]?.count}
            </div>
          );
        })}
        <div className="mt-10 m-12 p-2">
          <textarea
            className="w-[340px] h-16 p-1 border-2   "
            placeholder="Any Suggestions? We will pass to our restaurant partner."
          ></textarea>
        </div>

        <div className="p-2 border-2 w-[340px] ml-[55px] mr-20    text-sm">
          <p className="font-semibold text-gray-700">
            Opt in for No-contact Delivery
          </p>
          <p className="font-serif  text-gray-400">
            Unwell, or avoiding contact? Please select no-<br></br>
            contact delivery. Partner will safely place the order<br></br>{" "}
            outside your door (not for COD)
          </p>
        </div>
        <div className="w-[340px] h-9 border-2 mt-6 ml-[55px]">
          <p className="pt-1 ml-3 text-gray-500 font-bold">APPLY COUPON CODE</p>
        </div>
        <div className="ml-[55px] mt-5 w-[340px] h-9 ">
          <p className=" font-bold text-2xl font-serif">Bill Details</p>
          <p className="mt-3 p-2 text-lg font-serif">
            Item Total
            <span className="pl-[150px]">
              {Object.values(cartItem).reduce((previousValue, currentValue) => {
                return (
                  previousValue +
                  (currentValue.price / 100) * currentValue.count
                );
              }, 0)}
            </span>
          </p>

          <hr></hr>
          <hr></hr>
          <hr></hr>

          <p className="p-2 font-serif text-lg">
            Total Pay
            <span className="pl-40">
              {Object.values(cartItem).reduce((previousValue, currentValue) => {
                return (
                  previousValue +
                  (currentValue.price / 100) * currentValue.count
                );
              }, 0)}
            </span>
          </p>
        </div>
        <div className="w-[340px] h-10 border-2 mt-28 ml-[55px] text-center bg-black text-white font-serif text-lg p-1">
          <button>Place Your Order</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="empty-cart-container">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt="empty-cart"
        className="h-96"
      />
      <h3 className="font-bold text-xl">You have nothing in your cart.</h3>
    </div>
  );
};
export default Cart;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { addItem, removeItem } from "../redux/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const addFoodItem = (cart) => {
    dispatch(addItem(cart));
  };

  const removeFoodItem = (cart) => {
    dispatch(removeItem(cart));
  };
  return (
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
        {cartItem?.map((cart, id) => {
          return (
            <div
              key={id}
              className="flex justify-between mr-24 ml-9 scroll-m-1"
            >
              <h4 className="grid mt-8 ml-5 ">{cart?.card?.info?.name}</h4>
              <div className=" flex  border-2  w-24  h-11 mt-6 ml-5">
                <button
                  onClick={() => addFoodItem(cart)}
                  className=" m-4 text-xl mt-3 text-orange-500"
                >
                  +
                </button>
                <span className="mt-4 text-orange-500">{cartItem.length}</span>
                <button
                  onClick={() => removeFoodItem(cart)}
                  className=" m-4 text-2xl font-bold mt-2 text-orange-500"
                >
                  -
                </button>
                <hr></hr>
              </div>
              <span className="ml-20 mt-10">
                ₹ {cart?.card?.info?.price / 100}
              </span>
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
          <p className="mt-3 p-2 text-lg font-serif"> Item Total</p>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <p className="p-2 font-serif text-lg">Total Pay</p>
        </div>
        <div className="w-[340px] h-10 border-2 mt-28 ml-[55px] text-center bg-black text-white font-serif text-lg p-1">
          <button>Place Your Order</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;

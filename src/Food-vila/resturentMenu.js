import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_url } from "./constant";
import { Resturent_Menu } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

const RestaurentMenu = () => {
  const [resturent, setResturent] = useState([]);
  const [resturentList, setResturentList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getRestaurentList();
  }, []);

  const getRestaurentList = async () => {
    const response = await fetch(Resturent_Menu + id);
    const json = await response.json();
    setResturent(json?.data?.cards[0]?.card?.card?.info);
    setResturentList(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };

  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      <div className="my-4 flex p-3 bg-violet-200 ">
        <img
          className="w-80 h-52 rounded-lg ml-4"
          src={img_url + resturent.cloudinaryImageId}
          alt="this is an img"
        />

        <div className="text-black text-xl py-5 px-16">
          <h2 className="text-2xl font-bold leading-[2]"> {resturent.name}</h2>
          <h3 className="leading-[2]   text-base font-bold">
            {resturent.city}
          </h3>
          {/* <h3 className="leading-[2] text-base font-bold ">
            {resturent.cuisines.join(", ")}
          </h3> */}
          <div className="flex gap-6 ">
            <h3 className=" leading-[3]  text-base font-bold">
              ★ {resturent.avgRating}
            </h3>
            <h3 className=" leading-[3]  text-base font-bold">
              ₹{resturent.costForTwo / 100} for two
            </h3>
          </div>
        </div>
        <div className=" w-72 border-red-300 border-2 mt-5 mb-5 ml-56">
          <p className="text-black font-bold text-3xl leading-[2] text-center mt-2">
            OFFER
          </p>
          <p className="text-black font-bold text-xl leading-[2]  flex gap-2 items-center ml-8">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path>
            </svg>{" "}
            50% off on all orders
          </p>
          <p className="text-black font-bold text-xl flex gap-2 items-center ml-8">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path>
            </svg>
            FREE DELIVERY
          </p>
        </div>
      </div>
      <div>
        <div></div>
        {resturentList?.map((el, id) => {
          return (
            <div key={id}>
              <div className="text-red-400 font-bold text-2xl float-right flex ">
                <h1 className="float-right flex">{el?.card?.card?.title}</h1>
              </div>
              <br></br>
              <div className="mt-5">
                <h4>
                  {el?.card?.card?.itemCards?.map((item, id) => {
                    return (
                      <div className="w-3/5 h-48 m-7 p-4 shadow-xl float-right mt-6 ">
                        <img
                          className="w-28 h-28 rounded-md float-right"
                          src={img_url + item?.card?.info?.imageId}
                          alt="this is an img"
                        />

                        <div key={id} className="ml-7  ">
                          <div className="flex ">
                            <p className="w-4 h-4 bg-green-400 m-2 border-4 "></p>

                            <h4 className="font-bold mt-1 ">
                              {item?.card?.info?.name}
                            </h4>
                          </div>
                          <h4 className="ml-7 font-sans leading-[2]">
                            ₹ {item?.card?.info?.price / 100}
                          </h4>
                          <div className="flex font-sans leading-[2]">
                            <h4 className="fill-zinc-400 ml-7	">
                              {item?.card?.info?.category}
                            </h4>
                          </div>
                          <div className=" flex  border-2  w-24  h-11 mt-3 ml-5">
                            <button
                              onClick={() => addFoodItem(item)}
                              className=" m-4 text-xl mt-3 text-orange-500"
                            >
                              +
                            </button>
                            <span className="mt-4 text-orange-500">
                              {cartItem.length}
                            </span>
                            <button
                              onClick={() => removeFoodItem(item)}
                              className=" m-4 text-2xl font-bold mt-2 text-orange-500"
                            >
                              -
                            </button>
                            <hr></hr>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurentMenu;

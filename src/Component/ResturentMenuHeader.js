import React from "react";
import { img_url } from "../utils/Constant";

const ResturentMenuHeader = ({ resturent }) => {
  return (
    <div>
      <div className="my-4 flex p-3 bg-violet-200 ">
        <img
          className="w-80 h-52 rounded-lg ml-4"
          src={img_url + resturent[0]?.card?.card?.info?.cloudinaryImageId}
          alt="this is an img"
        />

        <div className="text-black text-xl py-5 px-16">
          <h2 className="text-2xl font-bold leading-[2]">
            {resturent[0]?.card?.card?.info.name}
          </h2>
          <h3 className="leading-[2]   text-base font-bold">
            {resturent[0]?.card?.card?.info.city}
          </h3>
          <h3 className="leading-[2] text-base font-bold ">
            {resturent[0]?.card?.card?.info?.cuisines?.join(", ")}
          </h3>
          <div className="flex gap-6 ">
            <h3 className=" leading-[3]  text-base font-bold">
              ★ {resturent[0]?.card?.card?.info?.avgRating}
            </h3>
            <h3 className=" leading-[3]  text-base font-bold">
              ₹{resturent[0]?.card?.card?.info?.costForTwo / 100} for two
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
      <div></div>
    </div>
  );
};

export default ResturentMenuHeader;

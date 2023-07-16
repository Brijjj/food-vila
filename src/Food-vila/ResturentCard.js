import React from "react";
import { img_url } from "./constant";

const ResturentCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  costForTwo,
  minDeliveryTime,
}) => {
  return (
    <div className="w-64 h-92 m-16 p-3 shadow-xl bg-white hover:scale-[0.90]">
      <div className="text-lg">
        <img
          className="w-60 h-40 rounded-xl"
          src={img_url + cloudinaryImageId}
          alt="this is an img"
        ></img>
        <p className="font-serif font-semibold"> {name}</p>
        <h3 className="text-sm text-left">{cuisines.join(", ")}</h3>
        <div>
          {avgRating > 4 ? (
            <span className="text-xs  p-0.5 pl-1 pr-4 bg-green-400  text-white ">
              {avgRating}
            </span>
          ) : (
            <span className="text-xs text-left  p-0.5 pl-1 pr-4 bg-orange-500 text-white ">
              {avgRating}
            </span>
          )}
          <span className="text-xs  ml-9">{minDeliveryTime} MINS</span>
          <span className="text-xs  text-right ml-6">
            ₹{costForTwo / 100} FOR TWO
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResturentCard;

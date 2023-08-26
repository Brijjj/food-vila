import React from "react";
import { img_url } from "../utils/Constant";

const Carousel = ({ carousel }) => {
  return (
    <div className="bg-violet-200 h-56 mt-2 pt-4">
      <div className="flex justify-between ml-8 mr-8   ">
        {carousel.slice(0, 3)?.map((el, id) => {
          return (
            <div key={id}>
              <img
                className="w-48 h-48 hover:scale-90"
                src={img_url + el.imageId}
                alt={el.accessibility?.altText}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

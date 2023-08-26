import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { img_url } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/CartSlice";

const MenuList = ({ resturentList }) => {
  const cartItem = useSelector((store) => store.cart.cartItems);

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      {resturentList?.map((el, id) => {
        return (
          <div key={id}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <p className=" hover:text-red-700">
                    {el?.card?.card?.title}
                    {/* <span className="ml-32">{el?.card?.card?.itemCards?.length}-Items</span>  */}
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="mt-5">
                    <h4>
                      {el?.card?.card?.itemCards?.map((item, id) => {
                        return (
                          <div
                            className="w-2/3 h-56 m-7 p-4 shadow-xl float-right mt-6 "
                            key={id}
                          >
                            <img
                              className="w-28 h-28 rounded-md float-right"
                              src={img_url + item?.card?.info?.imageId}
                              alt="this is an img"
                            />
                            <div key={id} className="ml-7  ">
                              <div className="flex ">
                                {item?.card?.info?.isVeg === 1 ? (
                                  <p className="w-4 h-4 bg-green-400 m-2 border-4 "></p>
                                ) : (
                                  <p className="w-4 h-4 bg-red-400 m-2 border-4 "></p>
                                )}

                                <h4 className="font-bold mt-1 ">
                                  {item?.card?.info?.name}
                                </h4>
                              </div>
                              <h4 className="ml-7 font-sans leading-[2]">
                                ₹ {item?.card?.info?.price / 100}
                              </h4>
                              <div className="flex font-sans leading-[1.5] text-sm">
                                <h4 className="fill-zinc-400 ml-7	">
                                  {item?.card?.info?.description}
                                </h4>
                              </div>
                              <div className=" flex  border-2  w-24  h-11 mt-3 ml-5">
                                <button
                                  onClick={() => addFoodItem(item?.card?.info)}
                                  className=" m-4 text-xl mt-3 text-orange-500"
                                >
                                  +
                                  <span>
                                    {cartItem[item?.card?.info?.name]?.[
                                      "count"
                                    ] > 0
                                      ? cartItem[item?.card?.info?.name]?.[
                                          "count"
                                        ]
                                      : 0}
                                  </span>
                                </button>
                                <span className="mt-4 text-orange-500"></span>
                                <button
                                  onClick={() =>
                                    removeFoodItem(item?.card?.info)
                                  }
                                  className=" m-4 text-2xl font-bold mt-2 text-orange-500"
                                >
                                  -
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </h4>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;

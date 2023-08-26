import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Resturent_Menu } from "../utils/Constant";
import ResturentMenuHeader from "./ResturentMenuHeader";
import MenuList from "./MenuList";

const RestaurentMenu = () => {
  const [resturent, setResturent] = useState([]);
  const [resturentList, setResturentList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getRestaurentList();
  }, []);
  const getRestaurentList = async () => {
    try {
      const response = await fetch(Resturent_Menu + id);
      const json = await response.json();
      setResturent(json?.data?.cards);

      setResturentList(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <ResturentMenuHeader resturent={resturent} />
      <MenuList resturentList={resturentList} />
    </div>
  );
};
export default RestaurentMenu;

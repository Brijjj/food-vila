import React, { useEffect, useState } from "react";
import ResturentCard from "./ResturentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Resturents } from "../utils/Constant";
import Carousel from "./Carousel";
const Body = () => {
  const [input, setInput] = useState("");
  const [allresturent, setAllResturent] = useState([]);
  const [filteredResturent, setFilteredResturent] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [isRestaurantFound, setIsRestaurantFound] = useState(true)

  const resturentData = async () => {
    try {
      let data = await fetch(Resturents);
      const json = await data.json();
      setAllResturent(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredResturent(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    resturentData();
  }, []);

  const filterData = (searchTxt, resturents) => {
    const filteredData = resturents.filter((resturent) =>
      resturent.info.name.toLowerCase().includes(searchTxt)
      
    );
    return filteredData;

  };

   
  if (!allresturent) return null;
  return allresturent?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <br></br>
      <Carousel carousel={carousel} />
      <div className="ml-96 mt-8">
        <input
          className="w-96 h-11 bg-slate-300 m-1 shadow-xl rounded-md p-2 font-bold"
          value={input}
          placeholder="  Search for resturent and food"
          onChange={(e) => setInput(e.target.value)}
        ></input>

        <button
          className="rounded-md w-20 h-11 bg-slate-300 shadow-xl font-medium"
          onClick={() => {
            const data = filterData(input, allresturent);
            setFilteredResturent(data);
          }}
        >
          Search
        </button>
        <div>
        </div>
      </div>
      <h1 className="mt-4 ml-6 font-bold text-2xl">
        {allresturent?.length} Resturents
      </h1>
      {filteredResturent?.length===0?<span className="font-bold ">No resturent</span>:null}
      <div className="flex flex-wrap  ">
        {filteredResturent?.map((resturent) => {
          return (
            <Link to={"resturent/" + resturent.info.id} key={resturent.info.id} >
              <ResturentCard {...resturent.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

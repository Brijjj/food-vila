import React, { useEffect, useState } from "react";
import ResturentCard from "./ResturentCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { Resturents } from "./constant";
import useOnline from "../utils/useOnline";
const Body = () => {
  const [input, setInput] = useState("");
  const [allresturent, setAllResturent] = useState([]);
  const [filteredResturent, setFilteredResturent] = useState([]);

  const isOnline = useOnline();

  async function resturentData() {
    let data = await fetch(Resturents);
    const json = await data.json();
    setAllResturent(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredResturent(json?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    resturentData();
  }, []);

  if (!allresturent) return null;
  if (!isOnline)
    return <h1>You are Offline!! Please check your Connections</h1>;
  return allresturent?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <br></br>
      <div className=" bg-violet-200 flex m-2 ">
        <div className="flex space-x-52 ml-5 w-64 h-56 p-3">
          <img
            className="hover:scale-75"
            src="https://dailyblogs.com.au/wp-content/uploads/2019/02/Coupon-DIp.png"
          ></img>
          <img
            className="hover:scale-75"
            src="https://i.pinimg.com/originals/84/1d/a9/841da932042cc95de5671926413b2d54.png"
          ></img>
          <img
            className="hover:scale-75"
            src="https://blog.esewa.com.np/wp-content/uploads/2019/12/food-mandu-blog-banner.png"
          ></img>
        </div>
      </div>
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
      </div>
      <h1 className="mt-4 ml-6 font-bold text-2xl">15 Restaurents</h1>
      <div className="flex flex-wrap  ">
        {filteredResturent.map((resturent) => {
          console.log(resturent);
          return (
            <Link to={"resturent/" + resturent.data.id} key={resturent.data.id}>
              <ResturentCard {...resturent.data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

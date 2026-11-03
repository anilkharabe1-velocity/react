import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { Link } from "react-router-dom";
// import resArray from "../utils/resData";
import Shimmer from "./Shimmer";
import useResList from "../customHooks/useResList";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  // if no dependency array => useEffect will called everytime when the component re-render
  // if empty dependecy array => useEffect will called only once => for API
  // if dependence array => useEffect will called whenever the dependency variable changed

  const {
    listOfRestaurant,
    filteredRestaurant,
    isLoading,
    setFilteredRestaurant,
  } = useResList();

  return isLoading ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <input
          className="border-1 rounded-sm"
          type="text"
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="border-1 ml-2.5 px-1.5 rounded-sm bg-amber-100"
          onClick={() => {
            // filter. the resturants card and update the UI
            const filterData = listOfRestaurant.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestaurant(filterData);
          }}
        >
          Search
        </button>

        <button
          className="border-1 ml-2.5 px-1.5 rounded-sm bg-amber-100"
          onClick={() => {
            const filteredData = listOfRestaurant.filter((res) => {
              return res.info.avgRating >= 4.5;
            });
            setFilteredRestaurant(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((resObj) => {
          return (
            <Link to={"/res-menu/" + resObj.info.id}>
              <RestaurantCard key={resObj.info.id} data={resObj} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

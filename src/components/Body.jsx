import RestaurantCard from "./RestaurantCard";
import "./Body.css";
import { useEffect, useState } from "react";
// import resArray from "../utils/resData";
import axios from "axios";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const fetchDataFromAPI = async () => {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    setListOfRestaurant(
      response.data.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants,
    );

    setFilteredRestaurant(
      response.data.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants,
    );

    setIsLoading(false);
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  // if no dependency array => useEffect will called everytime when the component re-render
  // if empty dependecy array => useEffect will called only once => for API
  // if dependence array => useEffect will called whenever the dependency variable changed

  return isLoading ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
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
          className="top-res-button"
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
      <div className="res-container">
        {filteredRestaurant.map((resObj) => {
          return <RestaurantCard key={resObj.info.id} data={resObj} />;
        })}
      </div>
    </div>
  );
};

export default Body;

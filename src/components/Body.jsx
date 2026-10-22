import RestaurantCard from "./RestaurantCard";
import "./Body.css";
import { useEffect, useState } from "react";
// import resArray from "../utils/resData";
import axios from "axios";

const Body = () => {
  const [resDataUsingState, setResDataUsingState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataFromAPI = async () => {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    setResDataUsingState(
      response.data.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants,
    );

    setIsLoading(false);
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  if (isLoading) {
    return (
      <>
        <h2>Loading</h2>
      </>
    );
  }

  // if no dependency array => useEffect will called everytime when the component re-render
  // if empty dependecy array => useEffect will called only once => for API
  // if dependence array => useEffect will called whenever the dependency variable changed

  return (
    <div>
      <div className="search-container">
        <input type="text" placeholder="Search Restaurant"></input>
        <button
          className="top-res-button"
          onClick={() => {
            const filteredData = resDataUsingState.filter((res) => {
              return res.info.avgRating >= 4.5;
            });
            console.log("filteredData:", filteredData);
            setResDataUsingState(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resDataUsingState.map((resObj) => {
          return <RestaurantCard key={resObj.info.id} data={resObj} />;
        })}
      </div>
    </div>
  );
};

export default Body;

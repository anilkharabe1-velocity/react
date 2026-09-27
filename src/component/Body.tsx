import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../data/resList";

const Body = (): React.ReactElement => {
  const [reactVariable, setReactVariable] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            // filter login
            const filteredData = reactVariable.filter((res) => {
              return res?.info?.avgRating >= 4.5;
            });

            setReactVariable(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {reactVariable.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

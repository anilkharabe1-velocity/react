import RestaurantCard from "./RestaurantCard";
import "./Body.css";
import resArray from "../utils/resData";

const Body = () => {
  return (
    <div>
      <div className="search-container">
        <input type="text" placeholder="Search Restaurant"></input>
        <button className="top-res-button">Top Restaurant</button>
      </div>
      <div className="res-container">
        {resArray.map((resObj) => {
          return <RestaurantCard data={resObj} />;
        })}
      </div>
    </div>
  );
};

export default Body;

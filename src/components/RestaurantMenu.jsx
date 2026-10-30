import { useState } from "react";
// import { useParams } from "react-router-dom";
import resMenu from "../utils/resMenu";
import "./RestaurantMenu.css";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const [resInfo] = useState(resMenu);

  const { name, avgRating, costForTwoMessage, areaName } =
    resInfo.data.cards[2].card.card.info;

  const { cards: categories } =
    resInfo.data.cards[3].groupedCard.cardGroupMap.REGULAR;

  const foodCategory = categories.filter((item) => {
    return (
      item.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  return (
    <>
      <div className="resInfo">
        <h1>{name}</h1>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwoMessage} </h4>
        <h4>Outlet: {areaName}</h4>
      </div>

      <ul>
        {foodCategory.map((item) => {
          return <MenuCategory data={item} />;
        })}
      </ul>
    </>
  );
};

export default RestaurantMenu;

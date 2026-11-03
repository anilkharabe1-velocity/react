import { useState, useEffect } from "react";
import axios from "axios";

const useResList = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return {
    listOfRestaurant,
    filteredRestaurant,
    isLoading,
    setFilteredRestaurant,
  };
};

export default useResList;

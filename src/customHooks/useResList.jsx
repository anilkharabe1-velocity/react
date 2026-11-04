import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useResList = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const fetchRestaurant = async () => {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const restaurants =
      response.data.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;

    setFilteredRestaurant(restaurants);
    return restaurants;
  };

  const {
    data: listOfRestaurant = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["restaurants"],
    queryFn: fetchRestaurant,
  });

  return {
    listOfRestaurant,
    filteredRestaurant,
    isLoading,
    setFilteredRestaurant,
    isError,
    error,
  };
};

export default useResList;

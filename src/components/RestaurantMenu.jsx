import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  //   const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log("resId", resId);

  const fetchMenu = async () => {
    const data = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`,
    );
    console.log("data", data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <>
      <h1>Velocity Restaurant</h1>
      <h2>4.5 Stars</h2>
      <h3>₹200 for two</h3>

      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Pohe</li>
      </ul>
    </>
  );
};

export default RestaurantMenu;

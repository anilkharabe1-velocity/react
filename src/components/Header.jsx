import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-gray-100">
      <div>
        <img
          className="w-38"
          src={
            "https://img.magnific.com/premium-vector/food-delivery-online-concept-vector_1162942-1594.jpg?semt=ais_hybrid&w=740&q=80"
          }
        ></img>
      </div>
      <h1 className="text-5xl mt-4">Food Delivery App</h1>
      <div>
        <ul className="flex ">
          <li className="p-2.5 m-2.5">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2.5 m-2.5">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2.5 m-2.5">
            <Link to="/cart">Cart({cart.length})</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

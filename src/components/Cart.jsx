import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartFun = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <h1>Cart Page...</h1>
      <div>
        <ItemList itemList={cart} />
      </div>
      <button onClick={clearCartFun}>Clear Cart</button>
    </>
  );
};

export default Cart;

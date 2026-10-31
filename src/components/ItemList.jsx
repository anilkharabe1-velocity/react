import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import "./ItemList.css";

const ItemList = ({ itemList }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {itemList.map((item) => {
        return (
          <div className="item">
            <div className="item-info">
              <h3>{item.card.info.name}</h3>
              <h5>₹{item.card.info.price / 100}</h5>
              <h5>
                {item?.card?.info?.ratings?.aggregatedRating?.rating} star (
                {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
              </h5>
              <p>{item?.card?.info?.description}</p>
            </div>
            <div className="item-img">
              <button className="add-btn" onClick={() => handleAdd(item)}>
                {/* <button className="add-btn" onClick={handleAdd(item)}> completly wrong */}
                {/* <button className="add-btn" onClick={ handleAdd}> */}
                Add+
              </button>
              <img
                className="res-img"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`}
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

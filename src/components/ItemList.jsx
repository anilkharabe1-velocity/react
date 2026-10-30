import "./ItemList.css";

const ItemList = ({ itemList }) => {
  return (
    <div>
      {itemList.map((item) => {
        console.log("item", item);
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
              <button className="add-btn">Add+</button>
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

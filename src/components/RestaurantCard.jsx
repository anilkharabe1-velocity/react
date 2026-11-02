const RestaurantCard = ({ data }) => {
  const {
    name,
    avgRating,
    sla: { slaString },
    cuisines,
    areaName,
    cloudinaryImageId,
  } = data.info;

  return (
    <div className="border-1 w-50 bg-gray-50 p-5 m-5">
      <img
        className="w-100%"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      ></img>
      <p>{name}</p>
      <p>{avgRating} Star</p>
      <p>{slaString} </p>
      <p>{cuisines.join(", ")} </p>
      <p>{areaName} </p>
    </div>
  );
};

export default RestaurantCard;

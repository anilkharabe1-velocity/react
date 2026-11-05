const withOfferRestaurantCard = (InputComponent) => {
  return (props) => {
    return (
      <div style={{ position: "relative" }}>
        <p
          style={{
            position: "absolute",
            color: "white",
            background: "black",
            width: "66%",
            left: "41px",
          }}
        >
          with Offer of 50%
        </p>
        <InputComponent {...props} />
      </div>
    );
  };
};

export default withOfferRestaurantCard;

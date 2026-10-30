import "./MenuCategory.css";
import ItemList from "./ItemList";
const MenuCategory = (props) => {
  const { title, itemCards } = props.data.card.card;

  return (
    <div className="menu-category">
      <h2>
        {title} ({itemCards.length})
      </h2>
      <div>
        <ItemList itemList={itemCards} />
      </div>
    </div>
  );
};

export default MenuCategory;

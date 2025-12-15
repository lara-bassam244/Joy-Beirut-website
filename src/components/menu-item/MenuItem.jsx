import "./menuitem.css";
import IncreaseDecrease from "../increase-decrease/IncreaseDecrease";

const MenuItem = ({ item }) => {
  const { id, name, price, image } = item;

  const cartItem = {
    id: `menu-${id}`,
    name,
    image,
    price: Number(String(price).replace("$", "")), 
    type: "menu",
  };

  return (
    <div className="menu-item-wrapper">
      <div className="menu-item">
        <div className="menu-item-image-container">
          <img src={image} alt={name} className="menu-item-image" />
          <div className="menu-item-shadow"></div>
        </div>

        <div className="menu-item-content">
          <h4 className="menu-item-name">{name}</h4>
          <span className="menu-item-price">{price}</span>
        </div>

        <div className="menu-item-controls">
          <IncreaseDecrease item={cartItem} />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

import { useState } from "react";
import "./card.css";

 const Card = ({ title, price, image})  => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded((prev) => !prev);      
  };

  return (
    <div className="menu-card">
      <img src={image} alt={title} className="menu-card-image" />

      <div className="menu-card-body">
        <div className="menu-card-row">
          <h4 className="menu-card-title">{title}</h4>
          <span className="menu-card-price">{price}$</span>
        </div>

        <button
          className={`menu-card-btn ${added ? "menu-card-btn-added" : ""}`}
          onClick={handleClick}
        >
          {added ? "Added To Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}

export default Card;

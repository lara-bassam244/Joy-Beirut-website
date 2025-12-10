import { useState } from "react";
import "./card.css";
import { Heart } from "lucide-react";

 const Card = ({ title, price, image})  => {
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setAdded((prev) => !prev);      
  };
    const handleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className="menu-card">
      <img src={image} alt={title} className="menu-card-image" />

      <div className="menu-card-body">
        <div className="menu-card-row">
          <h4 className="menu-card-title">{title}</h4>
          <span className="menu-card-price">{price}$</span>
        </div>


        <div className="btns-container">
        <button
          className={`menu-card-btn ${added ? "menu-card-btn-added" : ""}`}
          onClick={handleClick}
        >
          {added ? "Added To Cart" : "Add To Cart"}
        </button>
        <Heart
            size={30}
            onClick={handleLike}
            stroke="white"
            fill={liked ? "var(--accent-color)" : "var(--secondary-color"}
            style={{
              cursor: "pointer",
            }}
          />
      </div>
      </div>
    </div>
  );
}

export default Card;

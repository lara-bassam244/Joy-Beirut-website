import { useState } from "react";
import "./card.css";
import { Heart } from "lucide-react";

const Card = ({
  title,
  image,
  price,                 
  showHeart = true,      
  showPrice = true,     
  buttonText = "Add To Cart",
  buttonTextActive = "Added To Cart",
  onButtonClick,         
  variant = "menu",    
}) => {
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    if (onButtonClick) return onButtonClick();
    setAdded((prev) => !prev);
  };

  const handleLike = () => setLiked((prev) => !prev);

  return (
    <div className={`menu-card ${variant === "community" ? "menu-card--community" : ""}`}>
      <img src={image} alt={title} className="menu-card-image" />

      <div className="menu-card-body">
        <div className="menu-card-row">
          <h4 className="menu-card-title">{title}</h4>

          {showPrice && price !== undefined && (
            <span className="menu-card-price">{price}$</span>
          )}
        </div>

        <div className="btns-container">
          <button
            className={`menu-card-btn ${added ? "menu-card-btn-added" : ""}`}
            onClick={handleClick}
            type="button"
          >
            {added ? buttonTextActive : buttonText}
          </button>

          {showHeart && (
            <Heart
              size={30}
              onClick={handleLike}
              stroke="white"
              fill={liked ? "var(--accent-color)" : "var(--secondary-color)"}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

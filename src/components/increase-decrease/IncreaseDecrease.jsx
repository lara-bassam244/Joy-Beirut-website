import "./increasedecrease.css";
import { useCart } from "../../components/cart-info/CartContext"; 

const IncreaseDecrease = ({ item }) => {
  const { addItem, removeOne, getQty } = useCart();
  const quantity = getQty(item.id);

  return (
    <div className="increase-decrease-controls">
      <button className="dec-btn" onClick={() => removeOne(item.id)} title="Decrease">-</button>
      <span className="qty-display">{quantity}</span>
      <button className="inc-btn" onClick={() => addItem(item)} title="Increase">+</button>
    </div>
  );
};

export default IncreaseDecrease;

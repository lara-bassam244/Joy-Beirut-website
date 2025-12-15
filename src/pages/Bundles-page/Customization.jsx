import { useState } from "react";
import "./customization.css";
import Navbar from "../../components/nav-bar/Navbar";
import Footer from "../../components/footer/Footer";
import Hashtag from "../../components/hashtagStrip/Hashtag";
import { useCart } from "../../components/cart-info/CartContext";


const budgets = [15, 20, 25];
const sizes = ["Small", "Medium", "Large"];
const categories = ["Flowers", "Drinks", "Desserts", "Sandwiches"];

const flowers = [
  { id: "tulips", name: "Tulips", img: "/tulips.png" },
  { id: "pink-tulips", name: "Pink Tulips", img: "/pink-tulips.png" },
  { id: "pink-roses", name: "Pink Roses", img: "/pink-roses.png" },
  { id: "red-roses", name: "Red Roses", img: "/red-roses.png" },
];

const sandwiches = [
  { id: "italian", name: "Italian Cold Cut", img: "/italian-sandwich.png" },
  { id: "chicken", name: "Chicken Teriyaki", img: "/chicken-sandwich.png" },
  { id: "turkey", name: "Turkey & Cheese", img: "/turkey-sandwich.png" },
  { id: "roast", name: "Roast Beef", img: "/roastbeef-sandwich.png" },
];

const drinks = [
  { id: "iced-americano", name: "Iced Americano", img: "/iced-coffee-4.png" },
  { id: "mocha-bliss", name: "Mocha Bliss", img: "/iced-coffee-3.png" },
  { id: "golden-glow-caramel", name: "Golden Caramel", img: "/iced-coffee-2.png" },
  { id: "spanish-latte", name: "Spanish Latte", img: "/iced-coffee-1.png" },
];

const desserts = [
  { id: "tiramisu", name: "Tiramisu", img: "/desserts-1.png" },
  { id: "brownie", name: "Chocolate Brownie", img: "/desserts-2.png" },
  { id: "caramel-cake", name: "Caramel Cake", img: "/desserts-3.png" },
  { id: "matcha-tiramisu", name: "Matcha Tiramisu", img: "/desserts-4.png" },
];


const itemsByCategory = {
  Flowers: flowers,
  Drinks: drinks,
  Desserts: desserts,
  Sandwiches: sandwiches,
};

export default function Customization() {
  const { addItem } = useCart();
  const [budget, setBudget] = useState(25);
  const [size, setSize] = useState("Medium");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const [activeCat, setActiveCat] = useState(null);

  const [selected, setSelected] = useState({
    Flowers: "tulips",
    Drinks: "iced-americano",
    Desserts: "tiramisu",
    Sandwiches: "italian",
  });

  const currentItems = itemsByCategory[activeCat] ?? [];
  const selectedId = selected[activeCat];

  const handleSelectItem = (id) => {
    setSelected((prev) => ({ ...prev, [activeCat]: id }));
  };

    const addToCart = () => {
    const picked = {
      flowers: selected.Flowers,
      drink: selected.Drinks,
      dessert: selected.Desserts,
      sandwich: selected.Sandwiches,
    };

    addItem({
      id: `bundle-${Date.now()}`,
      name: `Custom Joy Bundle (${size})`,
      price: budget,
      image: "/customization-box.png",
      type: "bundle",
      meta: { picked, note, date, size },
    });
  };

  const handleCategoryClick = (c) => {
  setActiveCat((prev) => (prev === c ? null : c));
};

  return (
    <>
    <Navbar />
      <section className="customization-title-container">
        <div className="customization-title">
          <h3 className="title-page">Customization</h3>
          <p>
            Give someone a moment they’ll never forget send a Surprise Box today.
            Packed with handcrafted treats, fresh flowers, and festive touches,
            it’s the perfect way to show you care.
          </p>
        </div>
      </section>

      <Hashtag
        tags={[
          "#JoyInACup",
          "#BrewedWithLove",
          "#SipTheJoy",
          "#SliceOfHappiness",
          "#JoyfulMoments",
          "#SpreadJoy",
        ]}
        duration={25}
        repeat={5}
      />

      <section className="customization-page">
        <div className="customization-grid">
          <div className="custom-left">
            <img className="custom-box-img" src="/customization-box.png" alt="Joy Beirut box" />
          </div>

          <div className="custom-right">
  <div className="controls-layout">
    {/* Row 1 */}
    <div className="control-block budget-area">
      <h4 className="control-title">
        <span className="accent">Budget</span>
        <span className="control-sub">Choose the Budget for you</span>
      </h4>

      <div className="pill-row">
        {budgets.map((b) => (
          <button
            key={b}
            className={`pill ${budget === b ? "active" : ""}`}
            onClick={() => setBudget(b)}
            type="button"
          >
            {b}$
          </button>
        ))}
      </div>
    </div>

    <div className="control-block date-area">
      <h4 className="control-title">
        <span className="control-sub">Choose date</span>
      </h4>

      <input
        className="input-dark"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>

    {/* Row 2 */}
    <div className="control-block size-area">
      <h4 className="control-title">
        <span className="accent">Size</span>
        <span className="control-sub">Choose the perfect size for you</span>
      </h4>

      <div className="pill-row">
        {sizes.map((s) => (
          <button
            key={s}
            className={`pill ${size === s ? "active" : ""}`}
            onClick={() => setSize(s)}
            type="button"
          >
            {s}
          </button>
        ))}
      </div>
    </div>

    <div className="control-block letter-area">
      <h4 className="control-title">
        <span className="control-sub">Write a letter to have it in</span>
      </h4>

      <textarea
        className="textarea-dark"
        placeholder="Type"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={3}
      />
    </div>
    <div className="customisation-area custom-area">
      <h4 className="customisation-title">Customization</h4>

      <div className="category-stack">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className={`category-btn ${activeCat === c ? "active" : ""}`}
            onClick={() => handleCategoryClick(c)}
          >
            {c}
          </button>
        ))}
      </div>
        {activeCat && (
      <div className="items-grid">
        {currentItems.map((item) => (
    <button
      key={item.id}
      type="button"
      className={`item-tile ${selectedId === item.id ? "active" : ""}`}
      onClick={() => handleSelectItem(item.id)}
    >
      <img className="item-float-img" src={item.img} alt={item.name} />

      <div className="item-label-card">
        <p className="item-label">{item.name}</p>
      </div>
    </button>
  ))}
</div>
        )}

    </div>

    <button className="add-to-cart add-area" onClick={addToCart} type="button">
      Add To Cart
    </button>
  </div>
</div>

        </div>
      </section>

      <Footer />
    </>
  );
}

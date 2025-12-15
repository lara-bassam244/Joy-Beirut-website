import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); 

  const addItem = (item) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeOne = (id) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === id);
      if (!found) return prev;

      if (found.qty === 1) return prev.filter((p) => p.id !== id);
      return prev.map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p));
    });
  };

  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  const getQty = (id) => cart.find((p) => p.id === id)?.qty ?? 0;

  const subtotal = useMemo(
    () => cart.reduce((sum, p) => sum + p.price * p.qty, 0),
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, addItem, removeOne, removeItem, getQty, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

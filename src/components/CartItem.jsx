import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/CartContext";

export default function CartItem({ item }) {
  const cartCtx = useContext(CartContext);
  function handleIncrease() {
    cartCtx.addItem(item);
  }
  function handleDecrease() {
    cartCtx.removeItem(item.id);
  }
  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={handleDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </p>
    </li>
  );
}

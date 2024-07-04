import React from "react";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { cart, removeFromcart } = useContext(cartContext);
  return (
    <div>
      <h2>Cart Items</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p> {item.name}</p>
          <button onClick={() => removeFromcart(item.id)}>Remove Items</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;

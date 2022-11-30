import React from "react";
import "./Cart.css";
import CartIcon from "./CartIcon";

const Cart = () => {
  return (
    <React.Fragment>
      <button className="cart">
        <span>
          <CartIcon />
        </span>
        &nbsp; &nbsp;
        <span className="cartname">Your Cart </span> &nbsp;
        <span className="cartitems">3</span>
      </button>
    </React.Fragment>
  );
};

export default Cart;

import React, { useContext } from "react";
import "./Cart.css";
import CartIcon from "./CartIcon";
import Contex from "../../Store/Contex";

const Cart = (props) => {
  const cartContex = useContext(Contex);

  let numberOfItemsInCart = 0;
  cartContex.items.forEach((ele) => {
    numberOfItemsInCart = numberOfItemsInCart + Number(ele.quantity);
  });
  return (
    <React.Fragment>
      <button className="cart" onClick={props.cartOpen}>
        <span>
          <CartIcon />
        </span>
        &nbsp; &nbsp;
        <span className="cartname">Your Cart </span> &nbsp;
        <span className="cartitems">{numberOfItemsInCart}</span>
      </button>
    </React.Fragment>
  );
};

export default Cart;

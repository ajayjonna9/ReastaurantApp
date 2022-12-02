import React, { useContext } from "react";
import Button from "../UI/Button";
import "./CartDetails.css";
import Card from "../UI/Card";
import Model from "./Model";
import Contex from "../../Store/Contex";
import CartExpand from "./CartExpand";

const CartDetails = (props) => {
  const contexdetailes = useContext(Contex);
  let amount = 0;
  const arr = [];
  const orderButton = contexdetailes.items.length > 0;
  contexdetailes.items.forEach((item) => {
    amount = amount + Number(item.quantity) * Number(item.price);
  });
  const cartdetailsarr = contexdetailes.items.map((item) => {
    return (
      <CartExpand
        id={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
      />
    );
  });
  return (
    <Model onclick={props.cartClose}>
      <div>
        {cartdetailsarr}
        <div>
          <span className="cart_details_totalamount">Total Amount</span>
          <span className="cart_details_price">{amount.toFixed(2)}</span>
          <div className="cart_buttons">
            <button className="mealsclearbutton" onClick={props.cartClose}>
              Close
            </button>
            {orderButton && <button className="mealsaddbutton">Order</button>}
          </div>
        </div>
      </div>
    </Model>
  );
};

export default CartDetails;

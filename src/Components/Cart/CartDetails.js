import React, { useContext } from "react";
import Button from "../UI/Button";
import "./CartDetails.css";
import Card from "../UI/Card";
import Model from "./Model";
import Contex from "../../Store/Contex";

const CartDetails = (props) => {
  const contexdetailes = useContext(Contex);
  let amount = 0;
  const arr = [];
  contexdetailes.items.forEach((item) => {
    amount = amount + Number(item.quantity) * Number(item.price);
  });
  const cartdetailsarr = (
    <ul>
      {contexdetailes.items.map((item) => {
        return (
          <div>
            <span> {item.name}</span>
            <span>{item.price}</span>
            <span>{item.quantity}</span>
          </div>
        );
      })}
    </ul>
  );
  return (
    <Model onclick={props.cartClose}>
      <div>
        {cartdetailsarr}
        <div>
          <span className="cart_details_totalamount">Total Amount</span>
          <span className="cart_details_price">{amount.toFixed(2)}</span>
          <div className="cart_buttons">
            <button className="mealsaddbutton" onClick={props.cartClose}>
              Close
            </button>
            <button className="mealsaddbutton">Order</button>
          </div>
        </div>
      </div>
    </Model>
  );
};

export default CartDetails;

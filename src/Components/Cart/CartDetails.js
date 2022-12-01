import React from "react";
import Button from "../UI/Button";
import "./CartDetails.css";
import Card from "../UI/Card";
import Model from "./Model";

const CartDetails = (props) => {
  const onCartclose = (e) => {
    props.cartOpen(false);
  };
  const cartdetailsarr = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 29.99 }].map((item) => {
        return <div>{item.name}</div>;
      })}
    </ul>
  );
  return (
    <Model>
      <div>
        {cartdetailsarr}
        <div>
          <span className="cart_details_totalamount">Total Amount</span>
          <span className="cart_details_price">29,99</span>
          <div className="cart_buttons">
            <button className="mealsaddbutton" onClick={onCartclose}>
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

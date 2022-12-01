import React from "react";
import Button from "../UI/Button";
import "./CartDetails.css";
import Card from "../UI/Card";
import Model from "./Model";

const CartDetails = () => {
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
            <Button>Close</Button>
            <Button>Order</Button>
          </div>
        </div>
      </div>
    </Model>
  );
};

export default CartDetails;

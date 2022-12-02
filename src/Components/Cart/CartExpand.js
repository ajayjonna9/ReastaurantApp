import React, { useContext } from "react";
import "./CartExpand.css";
import Contex from "../../Store/Contex";

const CartExpand = (props) => {
  const usecontexData = useContext(Contex);
  const reducingItem = (e) => {
    usecontexData.removeItem(props.id);
  };
  const addingItem = (e) => {
    const obj = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: 1,
    };
    usecontexData.addItem(obj);
  };

  return (
    <div className="cartexpanddetails">
      <div className="cartdetails">
        <div className="cartitemname">{props.name}</div>
        <span className="cartitemprice">{props.price}</span>
        <span className="cartitemquantity">x{props.quantity}</span>
      </div>
      <div className="cartdetails cardbuttons">
        <button className="cartincanddecebutton" onClick={reducingItem}>
          -
        </button>
        <button className="cartincanddecebutton" onClick={addingItem}>
          +
        </button>
      </div>
      <hr className="horizontalline" />
    </div>
  );
};

export default CartExpand;

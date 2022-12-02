import React from "react";
import "./Inputfield.css";

const Inputfield = (props) => {
  return (
    <div>
      <label htmlFor={props.input.id} className="mealsaddamount">
        {props.input.label}
      </label>
      <input
        className="itemcountinput"
        {...props.input}
        onChange={props.onchange}
        value={props.val}
      ></input>
    </div>
  );
};

export default Inputfield;

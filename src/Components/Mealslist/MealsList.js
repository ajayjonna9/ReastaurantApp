import React from "react";
import "./MealsList.css";

const MealsList = (props) => {
  return (
    <React.Fragment>
      <div className="mealsdata">
        <div className="mealsname">{props.name}</div>
        <div className="mealsdes">{props.des}</div>
        <div className="mealsprice">${props.price}</div>
      </div>
      <div className="mealsadd">
        <div className="mealsaddamount"> Amount</div>
        <input
          type="number"
          name="itemcount"
          className="itemcountinput"
        ></input>
        <div>
          <button className="mealsaddbutton">+Add</button>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default MealsList;

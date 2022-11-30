import React from "react";
import "./MealsList.css";

const MealsList = (props) => {
  return (
    <React.Fragment className="lis">
      <h4 className="mealsdata">{props.name}</h4>
      <p className="mealsdes">{props.des}</p>
      <h5 className="mealsprice">${props.price}</h5>
      <hr />
    </React.Fragment>
  );
};

export default MealsList;

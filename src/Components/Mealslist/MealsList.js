import React from "react";
import "./MealsList.css";
import Inputfield from "../UI/Inputfield";
import Button from "../UI/Button";

const MealsList = (props) => {
  return (
    <React.Fragment>
      <div className="mealsdata">
        <div className="mealsname">{props.name}</div>
        <div className="mealsdes">{props.des}</div>
        <div className="mealsprice">${props.price}</div>
      </div>
      <form className="mealsadd">
        <Inputfield
          input={{
            type: "number",
            id: "forminput",
            name: "itemcount",

            label: "Amount",
            min: 1,
            max: 5,
            defaultValue: 1,
            step: 1,
          }}
        ></Inputfield>

        <div>
          <Button
            properties={{
              type: "submit",
            }}
          >
            +Add
          </Button>
        </div>
      </form>
      <hr />
    </React.Fragment>
  );
};

export default MealsList;

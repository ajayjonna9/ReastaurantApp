import React, { useContext, useRef, useState } from "react";
import "./MealsList.css";
import Inputfield from "../UI/Inputfield";
import Button from "../UI/Button";
import Contex from "../../Store/Contex";

const MealsList = (props) => {
  const contexdata = useContext(Contex);

  const [val, setVal] = useState(1);

  const onchangeinput = (e) => {
    setVal(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();

    const obj = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: val,
    };
    contexdata.addids(props.id);
    console.log(obj);
    contexdata.addItem(obj);
  };
  return (
    <React.Fragment>
      <div className="mealsdata">
        <div className="mealsname">{props.name}</div>
        <div className="mealsdes">{props.des}</div>
        <div className="mealsprice">${props.price}</div>
      </div>
      <form className="mealsadd" onSubmit={onFormSubmit}>
        <Inputfield
          onchange={onchangeinput}
          val={val}
          input={{
            type: "number",
            id: "forminput",
            name: "itemcount",

            label: "Amount",
            min: "1",
            max: "5",
            defaultValue: "1",
            step: "1",
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

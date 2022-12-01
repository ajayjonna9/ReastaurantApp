import React from "react";
import Cart from "../Cart/Cart";
import "./Header.css";
import Mealsimg from "../../Assects/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <div className="header">
          <h1 className="headerheading">ReactMeals</h1>
          <Cart cartOpen={props.cartOpen} />
        </div>
        <img src={Mealsimg} alt="food item" className="imagestyle" />
      </header>
    </React.Fragment>
  );
};

export default Header;

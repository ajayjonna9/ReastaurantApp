import React, { useState } from "react";
import Header from "./Components/Header/Header";
import RestaurantSummary from "./Components/RestaurantSummary/RestaurantSummary";
import MealsList from "./Components/Mealslist/MealsList";
import MealsData from "./Components/Mealslist/MealsData";
import Card from "./Components/UI/Card";
import CartDetails from "./Components/Cart/CartDetails";
import ContexProvider from "./Store/ContexProvider";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const showCart = () => {
    setCartOpen(true);
  };
  const hideCart = () => {
    setCartOpen(false);
  };

  return (
    <ContexProvider>
      <Header cartOpen={showCart} />

      <RestaurantSummary />
      {cartOpen && <CartDetails cartClose={hideCart}></CartDetails>}

      <Card>
        {MealsData.map((data) => {
          return (
            <MealsList
              key={data.id}
              id={data.id}
              name={data.name}
              des={data.description}
              price={data.price}
            />
          );
        })}
      </Card>
    </ContexProvider>
  );
};

export default App;

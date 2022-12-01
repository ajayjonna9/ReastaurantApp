import React from "react";
import Header from "./Components/Header/Header";
import RestaurantSummary from "./Components/RestaurantSummary/RestaurantSummary";
import MealsList from "./Components/Mealslist/MealsList";
import MealsData from "./Components/Mealslist/MealsData";
import Card from "./Components/UI/Card";
import CartDetails from "./Components/Cart/CartDetails";

const App = () => {
  return (
    <div>
      <Header />
      <RestaurantSummary />
      <CartDetails></CartDetails>
      <Card>
        {MealsData.map((data) => {
          return (
            <MealsList
              key={data.id}
              name={data.name}
              des={data.description}
              price={data.price}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default App;

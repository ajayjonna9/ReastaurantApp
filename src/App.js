import React from "react";
import Header from "./Components/Header/Header";
import RestaurantSummary from "./Components/RestaurantSummary/RestaurantSummary";
import MealsList from "./Components/Mealslist/MealsList";
import MealsData from "./Components/Mealslist/MealsData";

const App = () => {
  return (
    <div>
      <Header />
      <RestaurantSummary />
      <div className="card">
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
      </div>
    </div>
  );
};

export default App;

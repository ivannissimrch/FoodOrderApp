import { Fragment } from "react";
import Header from "./components/Layout/Header";
import AvaliableMeals from "./components/Meals/AvaliableMeals";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <MealsSummary />
        <AvaliableMeals />
      </main>
    </Fragment>
  );
}

export default App;

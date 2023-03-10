import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "../Layout/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Real Meals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food " />
      </div>
    </Fragment>
  );
};

export default Header;

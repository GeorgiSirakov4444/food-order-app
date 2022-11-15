import React from "react";
import classes from './AvailableMeals.module.css';
import DUMMY_MEALS from "./DummyMeals";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        
        <MealItem meal={meal} key={meal.id} id={meal.id}/>
    ));
  
    return (
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    );
  };
  
  export default AvailableMeals;
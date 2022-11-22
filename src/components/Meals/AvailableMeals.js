import {useState, useEffect} from "react";
import classes from "./AvailableMeals.module.css";
//import DummyMeals from "./DummyMeals";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState(); 

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-app-44677-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if(!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setLoading(false);
    };

    fetchMeals().catch((error) => {
      setLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if(loading) {
    return <section className={classes.MealsLoading}>
      <p>Loading ...</p>
    </section>
  }
  if(httpError) {
    return <section className={classes.error}>
      <p>{httpError}</p>
    </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
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

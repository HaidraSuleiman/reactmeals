import Meal from "./Meal.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const config = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp(
    "https://reactmeals-6cb03-default-rtdb.firebaseio.com/meals.json",
    config,
    []
  );

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

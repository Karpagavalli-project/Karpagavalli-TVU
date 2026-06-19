import { useState } from "react";

function App() {

  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRecipes = async () => {

    if (ingredient === "") return;

    setLoading(true);

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    const data = await response.json();

    if (data.meals) {
      setRecipes(data.meals);
    } else {
      setRecipes([]);
    }

    setLoading(false);
  };

  return (
    <div className="container">

      <h1>Recipe Finder</h1>

      <input
        type="text"
        placeholder="Enter Ingredient"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />

      <button onClick={searchRecipes}>
        Search
      </button>

      {loading && <h3>Loading...</h3>}

      {!loading && recipes.length === 0 && (
        <h3>No Recipes Found</h3>
      )}

      <div className="recipe-container">

        {recipes.map((recipe) => (
          <div className="card" key={recipe.idMeal}>

            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />

            <h3>{recipe.strMeal}</h3>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;
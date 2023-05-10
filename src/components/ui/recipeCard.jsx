import "./recipeCard.css";

export const RecipeCard = (recipe) => {
  // return console.log(recipe);
  return (
    <>
      <div className="recipeCard">
        <img
          src={recipe.recipe.recipe.image}
          className="recipeCardPicture"
        ></img>
        <div className="recipeCardInfoBox">
          <p>{recipe.recipe.recipe.mealType}</p>
          <h3>{recipe.recipe.recipe.label}</h3>
          <p>{recipe.recipe.recipe.dishType}</p>
        </div>
      </div>
    </>
  );
};

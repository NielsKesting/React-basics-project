import "./RecipeCard.css";

export const RecipeCard = (recipe) => {
  console.log(recipe);
  const cardInfo = recipe.recipe.recipe;

  const veganVegetarian = () => {
    if (cardInfo.healthLabels.includes("Vegan")) {
      return "Vegan";
    } else if (cardInfo.healthLabels.includes("Vegetarian")) {
      return "Vegetarian";
    }
  };

  return (
    <>
      <div className="recipeCard">
        <img src={cardInfo.image} className="recipeCardPicture"></img>
        <div className="recipeCardInfoBox">
          <p>{cardInfo.mealType}</p>
          <h2>{cardInfo.label}</h2>
          <p>{veganVegetarian()}</p>
          <p>{cardInfo.dietLabels}</p>
          <p>Dish: {cardInfo.dishType}</p>
          <p>Cautions</p>
          <p>{cardInfo.cautions}</p>
        </div>
      </div>
    </>
  );
};

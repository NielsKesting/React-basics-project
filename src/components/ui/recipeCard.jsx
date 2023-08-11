import "./RecipeCardStyle/RecipeCard.css";

// export const RecipeCard = (recipe, onClick) => {
export const RecipeCard = (recipe) => {
  const info = recipe.recipe.recipe;

  // Checks if a recipe is vegan or vegetarian and displays it on the card.
  const veganVegetarian = () => {
    if (info.healthLabels.includes("Vegan")) {
      return "Vegan";
    } else if (info.healthLabels.includes("Vegetarian")) {
      return "Vegetarian";
    }
  };

  // Checks for specific diets and allergies
  const dietLabels = () => {
    if (info.dietLabels.length !== 0) {
      let labelList = info.dietLabels.map((labels) => {
        return <li key={labels}>{labels}</li>;
      });

      return <ul className="dietLabels">{labelList}</ul>;
    }
  };

  const cautions = () => {
    if (info.cautions.length !== 0) {
      let cautionList = info.cautions.map((cautions) => {
        return <li key={cautions}>{cautions}</li>;
      });

      return (
        <>
          <p>Cautions:</p>
          <ul className="cautionList">{cautionList}</ul>
        </>
      );
    }
  };

  return (
    <>
      <button className="recipeCard" type="button">
        <img src={info.image} className="recipeCardPicture"></img>
        <div className="recipeCardInfoBox">
          <p className="mealType">{info.mealType}</p>
          <h2>{info.label}</h2>
          <p className="veganVegetarian">{veganVegetarian()}</p>
          {dietLabels()}
          <p>Dish: {info.dishType}</p>
          {cautions()}
        </div>
      </button>
    </>
  );
};

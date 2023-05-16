import "./RecipeCard.css";

export const RecipeCard = (recipe) => {
  const info = recipe.recipe.recipe;
  
  const veganVegetarian = () => {
    if (info.healthLabels.includes("Vegan")) {
      return "Vegan";
    } else if (info.healthLabels.includes("Vegetarian")) {
      return "Vegetarian";
    }
  };
  
  const cautions = () => {
    if (info.cautions.length !== 0) {
      let cautionList = info.cautions.map((cautions) =>{
      return <li>{cautions}</li>
      })
      
      return (
        <>
        <p>Cautions:</p>
        <ul className="cautionList">
          
          {cautionList}
        </ul>
        </>
      )
    }
  }

  return (
    <>
      <div className="recipeCard">
        <img src={info.image} className="recipeCardPicture"></img>
        <div className="recipeCardInfoBox">
          <p>{info.mealType}</p>
          <h2>{info.label}</h2>
          <p>{veganVegetarian()}</p>
          <p>{info.dietLabels}</p>
          <p>Dish: {info.dishType}</p>
          {cautions()}
        </div>
      </div>
    </>
  );
};

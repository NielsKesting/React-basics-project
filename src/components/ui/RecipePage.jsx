import "./RecipePageStyle/RecipePage.css";

export const RecipePage = (recipe) => {
  const info = recipe.recipe.recipe;

  const ingredients = () => {
    let ingredientList = info.ingredientLines.map((ingredient) => {
      return <li>{ingredient}</li>;
    });

    return (
      <>
        <h2>Ingredients:</h2>
        <ul className="ingredientList">{ingredientList}</ul>
      </>
    );
  };

  const healthLabels = () => {
    let healthLabelList = info.healthLabels.map((label) => {
      return <li>{label}</li>;
    });

    return (
      <>
        <div className="healthLabels">
          <p>Health labels:</p>
          <ul className="healthLabelList">{healthLabelList}</ul>
        </div>
      </>
    );
  };

  const dietLabels = () => {
    if (info.dietLabels.length !== 0) {
      let labelList = info.dietLabels.map((labels) => {
        return <li>{labels}</li>;
      });

      return (
        <>
          <div className="diet">
            <p>Diet:</p>
            <ul className="dietLabels">{labelList}</ul>
          </div>
        </>
      );
    }
  };

  const cautions = () => {
    if (info.cautions.length !== 0) {
      let cautionList = info.cautions.map((cautions) => {
        return <li>{cautions}</li>;
      });

      return (
        <>
          <div className="cautions">
            <p>Cautions:</p>
            <ul className="cautionList">{cautionList}</ul>
          </div>
        </>
      );
    }
  };

  const totalNutrients = () => {
    // const nutrients = ["ENERC_KCAL", "CHOCDF", "PROCNT", "FAT", "CHOLE", "NA"];
    const calories = Math.trunc(info.totalNutrients.ENERC_KCAL.quantity);
    const carbs = Math.trunc(info.totalNutrients.CHOCDF.quantity);
    const protein = Math.trunc(info.totalNutrients.PROCNT.quantity);
    const fat = Math.trunc(info.totalNutrients.FAT.quantity);
    const cholesterol = Math.trunc(info.totalNutrients.CHOLE.quantity);
    const sodium = Math.trunc(info.totalNutrients.NA.quantity);

    return (
      <>
        <div className="nutrients">
          <p>Total nutrients:</p>
          <ul className="nutrientList">
            <li>{calories} CALORIES</li>
            <li>{carbs} g CARBS</li>
            <li>{protein} g PROTEIN</li>
            <li>{fat} g FAT</li>
            <li>{cholesterol} mg CHOLESTEROL</li>
            <li>{sodium} mg SODIUM</li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="recipePage">
        <div className="recipePageBanner">
          <button type="button" id="backBtn">
            Back
          </button>
        </div>
        <img src={info.image} className="recipePagePicture"></img>
        <div className="recipePageInfoLeft">
          <p>{info.mealType}</p>
          <h2>{info.label}</h2>
          <p>Total cooking time: {info.totalTime} minutes</p>
          <p>Servings: {info.yield}</p>
          {ingredients()}
        </div>
        <div className="recipePageInfoRight">
          {healthLabels()}
          {dietLabels()}
          {cautions()}
          {totalNutrients()}
        </div>
        <div className="recipePageFooter"></div>
      </div>
    </>
  );
};

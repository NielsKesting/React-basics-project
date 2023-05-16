import "./RecipePageStyle/RecipePage.css";

export const RecipePage = (recipe) => {
  const info = recipe.recipe.recipe;

  // const healthLabels = () => {
  //   let healthLabelList = info.healthLabels.map((label) => {
  //     return <li>{label}</li>;
  //   });

  //   return (
  //     <>
  //       <p>Health labels:</p>
  //       <ul className="healthLabelList">{healthLabelList}</ul>
  //     </>
  //   );
  // };

  return (
    <>
      <div className="recipePage">
        <div className="recipePageBanner"></div>
        <img src={info.image} className="recipePagePicture"></img>
        <div className="recipePageInfoLeft">
          {/* <p>{info.mealtype}</p>
            <h2>{info.label}</h2> */}
        </div>
        <div className="recipePageInfoRight">
          {/* {healthLabels()}
            <p></p> */}
        </div>
      </div>
    </>
  );
};

import { useState } from "react";
import { RecipePage } from "../components/ui/RecipePage.jsx";
import { PageRetriever } from "../components/PageRetriever.jsx";

export function RecipeListPage() {
  let [recipe, setRecipe] = useState();

  return (
    <>
      <div className="recipeListPage">
        {recipe ? (
          <RecipePage chosenRecipe={recipe} onClick={setRecipe} />
        ) : (
          <PageRetriever onClick={setRecipe} />
        )}
      </div>
    </>
  );
}

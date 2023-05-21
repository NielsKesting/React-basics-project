import { data } from "../utils/data";
import { RecipePage } from "../components/ui/RecipePage";

export function RecipeListPage() {
  const recipeList = data.hits;
  let x = recipeList.map((element) => {
    return <RecipePage recipe={element} />;
  });

  return <div className="recipeList">{x}</div>;
}

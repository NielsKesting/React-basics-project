import "./RecipeListPage.css"
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard.jsx";

export function RecipeListPage() {
  const recipeList = data.hits;
  let x = recipeList.map((element) => {
      return <RecipeCard recipe={element} />
  });
  return x;
}

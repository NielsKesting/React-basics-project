// import { Center, Heading } from "@chakra-ui/react";
import "./RecipeListPage.css";
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard.jsx";

export function RecipeListPage() {
  const recipeList = data.hits[0];
  return <RecipeCard recipe={recipeList} />;

  // const recipeList = data.hits.map((recipe) => {
  //   const dish = recipe.recipe;
  //   // console.log(dish);
  //   return { dish };
  // });
  // console.log(recipeList);

  // recipeList.forEach((recipe) => {
  //   return (
  //     <div>
  //       <RecipeCard recipe={recipe} />
  //     </div>
  //   );
  // });
}

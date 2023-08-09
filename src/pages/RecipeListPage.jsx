import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard.jsx";
// import { RecipePage } from "../components/ui/RecipePage.jsx";

export function RecipeListPage() {
  const recipeList = data.hits;

  // test
  // function recipeListFilter(searchResult) {
  //   console.log(recipeList);
  //   const filteredList = recipeList.filter((object) =>
  //     object.recipe.label.toLowerCase().includes(searchResult)
  //   );
  //   console.log(filteredList);
  // }
  // recipeListFilter("choco");
  // /test

  let x = recipeList.map((element) => {
    return <RecipeCard recipe={element} />;
    // return <RecipePage recipe={element} />;
  });

  return (
    <>
      <input type="text" placeholder="Search"></input>
      <div className="recipeCardList">{x}</div>;
    </>
  );
}

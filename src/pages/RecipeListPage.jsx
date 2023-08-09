import { data } from "../utils/data";
import { useState } from "react";
import { TextInput } from "../components/ui/TextInput";
import { RecipeCard } from "../components/ui/recipeCard";
// import { RecipePage } from "../components/ui/RecipePage.jsx";

export function RecipeListPage() {
  let [searchResult, setSearchResult] = useState("");

  const handleChange = (event) => {
    setSearchResult(event.target.value);
  };

  // filter
  let recipeCardArray = (searchResult) => {
    if (searchResult.length == 0) {
      return data.hits;
    } else {
      let filteredList = data.hits.filter((object) =>
        object.recipe.label.toLowerCase().includes(searchResult)
      );
      return filteredList;
    }
  };

  // display
  let x = recipeCardArray(searchResult).map((element) => {
    return <RecipeCard recipe={element} />;
    // return <RecipePage recipe={element} />;
  });

  return (
    <>
      <TextInput onChange={handleChange} />
      <div className="recipeCardList">{x}</div>;
    </>
  );
}

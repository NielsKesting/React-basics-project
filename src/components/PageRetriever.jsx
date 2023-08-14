import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "../components/ui/TextInput";
import { RecipeCard } from "../components/ui/recipeCard";

export function PageRetriever({ onClick }) {
  let [searchResult, setSearchResult] = useState("");

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

  const handleChange = (event) => {
    setSearchResult(event.target.value);
  };

  // display
  let x = recipeCardArray(searchResult).map((element) => {
    return (
      <RecipeCard key={element.label} recipe={element} onClick={onClick} />
    );
  });

  return (
    <>
      <label>Recipe checker</label>
      <TextInput onChange={handleChange} />
      <div className="recipeCardList">{x}</div>;
    </>
  );
}

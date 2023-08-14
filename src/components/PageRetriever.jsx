import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { RecipeArray } from "./RecipeArray";

export function PageRetriever({ onClick }) {
  let [searchResult, setSearchResult] = useState("");

  // filter
  let recipeCardArray = (searchResult) => {
    if (searchResult.length == 0) {
      return data.hits;
    } else {
      let filteredList = data.hits.filter((object) =>
        object.recipe.label.toLowerCase().includes(searchResult.toLowerCase())
      );
      return filteredList;
    }
  };

  const handleChange = (event) => {
    setSearchResult(event.target.value);
  };

  return (
    <>
      <label>Recipe checker</label>
      <TextInput onChange={handleChange} />
      <section className="recipeSection">
        <RecipeArray
          onClick={onClick}
          recipes={recipeCardArray(searchResult)}
        />
      </section>
    </>
  );
}

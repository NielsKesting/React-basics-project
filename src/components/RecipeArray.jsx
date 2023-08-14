import { RecipeCard } from "../components/ui/recipeCard";

export const RecipeArray = ({ recipes, onClick }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.recipe.label}
          chosenRecipe={recipe}
          onClick={onClick}
        />
      ))}
    </>
  );
};

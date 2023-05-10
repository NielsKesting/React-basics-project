// import { Center, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/recipeCard.jsx";

export const RecipeListPage = () => {
  const recipe = data.hits[0];

  return <RecipeCard recipe={recipe} />;
};

// export const RecipeListPage = () => {
//   return (
//     <Center h="100vh" flexDir="column">
//       <Heading>Your Recipe App</Heading>
//     </Center>
//   );
// };

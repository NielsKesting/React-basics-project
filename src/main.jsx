import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecipeListPage } from "./pages/RecipeListPage";
// import { RecipePageChecker } from "./pages/RecipePageChecker";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <RecipePageChecker /> */}
      <RecipeListPage />
    </ChakraProvider>
  </React.StrictMode>
);

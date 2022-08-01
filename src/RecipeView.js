import React from "react";
import RecipeData from "./RecipeData";

export default function RecipeView({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt="recipe photo" />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="context_td">
        <p>{recipe.preperation}</p>
      </td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}
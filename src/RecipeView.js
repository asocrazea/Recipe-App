import React from "react";
import RecipeData from "./RecipeData";

export default function RecipeView({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img className="img" src={recipe.photo} alt="recipe photo" />
      </td>
      <td className="content_td scroller">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="context_td scroller">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button className="btn" name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}

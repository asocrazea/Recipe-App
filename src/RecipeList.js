import React from "react";
import RecipeData from "./RecipeData";
import RecipeView from "./RecipeView";

//Return the recipes as a table.
// TODO: Display the list of recipes using the structure of table that is provided.
// TODO: Create at least one additional component that is used by this component.
// TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>{" "}
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeView
              deleteRecipe={() => deleteRecipe(index)}
              key={index}
              recipe={recipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// const rows = RecipeList.map(
//   ({ name, cuisine, photo, ingredients, preperations, actions }, index) => (
//     <tr key={index}>
//       <td>{RecipeData.name}</td>
//       <td>{RecipeData.cuisine}</td>
//       <td>{RecipeData.photo}</td>
//       <td>{RecipeData.ingredients}</td>
//       <td>{RecipeData.preperations}</td>
//       <td>{RecipeData.actions}</td>
//     </tr>
//   )
// );

//   return (
//     <div className="recipe-list">
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Cuisine</th>
//             <th>Photo</th>
//             <th>Ingredients</th>
//             <th>Preperation</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows}
//           <button name="delete">Delete</button>
//         </tbody>
//       </table>
//     </div>
//   );
// }

export default RecipeList;

import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };
  //const handleChange = ({ target }) => {
  const handleSubmission = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };
  return (
    <form name="create" onSubmit={handleSubmission}>
      <table>
        <tbody>
          <tr>
            <td>
              <p>Name</p>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Recipe name"
              />
            </td>
            <td className="col">
              {" "}
              <p>Cuisine</p>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cusine Type"
              />
            </td>
            <td>
              {" "}
              <p>Photo</p>
              <input
                type="url"
                id="photo"
                name="photo"
                onChange={handleChange}
                value={formData.url}
                placeholder="url"
              />
            </td>
            <td>
              <p>Ingredients</p>
              <textarea
                name="ingredients"
                id="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="ingredients"
              ></textarea>
            </td>
            <td>
              <p>Preparation</p>
              <textarea
                className="text-bg"
                name="preparation"
                id="preparation"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="preparation"
              ></textarea>
            </td>
            <td>
              <p>Action</p>
              <button className="btn" type="submit">
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

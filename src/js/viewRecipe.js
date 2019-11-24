const recipeBox = document.querySelector("#recipeBox");

const viewRecipe = recipe => {
  if (recipe) {
    const ingredients = recipe.extendedIngredients
      .map(
        ingredient => `
<li>${ingredient.original}</li>`
      )
      .join(" ");

    const html = `
<img src=${recipe.image}
          alt="Meal-photo"
        />
        <p>${recipe.title}</p>
        <h5>Ingredients:</h5>
        <ul>
         ${ingredients}
        </ul>
`;
    recipeBox.innerHTML = html;
  }
};

export default viewRecipe;

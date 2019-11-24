const recipeBox = document.querySelector("#recipeBox");

const viewRecipe = recipe => {
  if (recipe) {
    const ingredients = recipe.extendedIngredients
      .map(
        ingredient => `
            <li>${ingredient.original}</li>`
      )
      .join(" ");

    let preparation = "";

    if (recipe.analyzedInstructions.length > 0) {
      preparation = recipe.analyzedInstructions[0].steps
        .map(
          step =>
            `<li>
        ${step.step}
        </li>`
        )
        .join("");
    } else {
      preparation = "Sorry we have no instruction for this one :(";
    }

    const tags = `<p>Tags:
      ${recipe.glutenFree ? "<span>Gluten Free<span/>" : ""}
      ${recipe.cheap ? "<span>Cheap<span/>" : ""}
      ${recipe.ketogenic ? "<span>Ketogenic<span/>" : ""}
      ${recipe.vegan ? "<span>Vegen<span/>" : ""}
      ${recipe.vegetarian ? "<span>Vegetarian<span/>" : ""}
      ${recipe.veryHealthy ? "<span>Very Healthy<span/>" : ""}
      ${recipe.veryPopular ? "<span>Very Popular<span/>" : ""}
      </p>`;

    let link = "";
    if (recipe.sourceName) {
      link = `
    <p>Original post: <a href=${recipe.sourceUrl} target="_blank">${recipe.sourceName}</a><p/>
      `;
    }

    const html = `
        <img src=${recipe.image}
          alt="Meal photo"
        />
        <p>${recipe.title}</p>
      ${tags}
        <h5>Ingredients:</h5>
        <ul>
            ${ingredients}
        </ul>
        <hr/>
        <span>Preparation Time: ${recipe.preparationMinutes} mins </span> <span>Servings: ${recipe.servings} </span>
        <h5>How to prepare:</h5>
        <ol>
            ${preparation}
        </ol>
        ${link}
        
`;
    recipeBox.innerHTML = html;
  }
};

export default viewRecipe;

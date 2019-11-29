import viewNutritions from "./viewNutritions";

const recipeBox = document.querySelector("#recipeBox");

export const clearRecipeView = () => {
  recipeBox.innerHTML = "";
  recipeBox.classList.remove("main__single-recipe");
};

const viewRecipe = recipe => {
  recipeBox.classList.add("main__single-recipe");
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

    const tags = `<p>
      ${recipe.glutenFree ? "<span class='main__tag'>Gluten Free</span>" : ""}
      ${recipe.cheap ? "<span class='main__tag'>Cheap</span>" : ""}
      ${recipe.ketogenic ? "<span class='main__tag'>Ketogenic</span>" : ""}
      ${recipe.vegan ? "<span class='main__tag'>Vegen</span>" : ""}
      ${recipe.vegetarian ? "<span class='main__tag'>Vegetarian</span>" : ""}
      ${recipe.veryHealthy ? "<span class='main__tag'>Very Healthy</span>" : ""}
      ${recipe.veryPopular ? "<span class='main__tag'>Very Popular</span>" : ""}
      </p>`;

    let link = "";

    if (recipe.sourceName) {
      link = `
    <p class="main__link">Original post: <a href=${recipe.sourceUrl} target="_blank">${recipe.sourceName}</a><p/>
      `;
    }

    const html = `
        <img src=${recipe.image}
          alt="Meal photo"
        />
        <h3>${recipe.title}</h3>
      ${tags}
        <h5>Ingredients:</h5>
        <ul class='main__ingredients'>
            ${ingredients}
        </ul>
        <h5>How to prepare:</h5>
        <ol class='main__steps'>
            ${preparation}
        </ol>
        ${link}
        <button class="main__getNutritionBtn"></button>
        `;
    recipeBox.innerHTML = html;
    viewNutritions(recipe.nutrition);
  }
};

export default viewRecipe;

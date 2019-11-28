const viewRecipe = recipe => {
  const recipeBox = document.querySelector("#recipeBox");
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
      ${
        recipe.glutenFree
          ? "<span class='badge badge-success m-1 p-1'>Gluten Free</span>"
          : ""
      }
      ${
        recipe.cheap
          ? "<span class='badge badge-success m-1 p-1'>Cheap</span>"
          : ""
      }
      ${
        recipe.ketogenic
          ? "<span class='badge badge-success m-1 p-1'>Ketogenic</span>"
          : ""
      }
      ${
        recipe.vegan
          ? "<span class='badge badge-success m-1 p-1'>Vegen</span>"
          : ""
      }
      ${
        recipe.vegetarian
          ? "<span class='badge badge-success m-1 p-1'>Vegetarian</span>"
          : ""
      }
      ${
        recipe.veryHealthy
          ? "<span class='badge badge-success m-1 p-1'>Very Healthy</span>"
          : ""
      }
      ${
        recipe.veryPopular
          ? "<span class='badge badge-success m-1 p-1'>Very Popular</span>"
          : ""
      }
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

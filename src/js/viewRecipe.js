import viewNutritions from './viewNutritions';

const recipeBox = document.querySelector('#recipeBox');

export const clearRecipeView = () => {
  recipeBox.innerHTML = '';
  recipeBox.classList.remove('main__single-recipe');
};

const viewRecipe = recipe => {
  recipeBox.classList.add('single-recipe');
  if (recipe) {
    const ingredients = recipe.extendedIngredients
      .map(
        ingredient => `
            <li>${ingredient.original}</li>`
      )
      .join(' ');

    let preparation = '';

    if (recipe.analyzedInstructions.length > 0) {
      preparation = recipe.analyzedInstructions[0].steps
        .map(
          step =>
            `<li>
        ${step.step}
        </li>`
        )
        .join('');
    } else {
      preparation = 'Sorry we have no instruction for this one :(';
    }

    const tags = `<p>
      ${
        recipe.glutenFree
          ? "<span class='single-recipe__tag'>Gluten Free</span>"
          : ''
      }
      ${recipe.cheap ? "<span class='single-recipe__tag'>Cheap</span>" : ''}
      ${
        recipe.ketogenic
          ? "<span class='single-recipe__tag'>Ketogenic</span>"
          : ''
      }
      ${recipe.vegan ? "<span class='single-recipe__tag'>Vegen</span>" : ''}
      ${
        recipe.vegetarian
          ? "<span class='single-recipe__tag'>Vegetarian</span>"
          : ''
      }
      ${
        recipe.veryHealthy
          ? "<span class='single-recipe__tag'>Very Healthy</span>"
          : ''
      }
      ${
        recipe.veryPopular
          ? "<span class='single-recipe__tag'>Very Popular</span>"
          : ''
      }
      </p>`;

    let link = '';

    if (recipe.sourceName) {
      link = `
    <p class="single-recipe__link">Original post: <a href=${recipe.sourceUrl} target="_blank">${recipe.sourceName}</a><p/>
      `;
    }

    const html = `
        <img src=${recipe.image}
          alt="Meal photo"
        />
        <h3>${recipe.title}</h3>
      ${tags}
        <h5>Ingredients:</h5>
        <ul class='single-recipe__ingredients'>
            ${ingredients}
        </ul>
        <h5>How to prepare:</h5>
        <ol class='single-recipe__steps'>
            ${preparation}
        </ol>
        ${link}
        <button class="single-recipe__getNutritionBtn"></button>
        `;
    recipeBox.innerHTML = html;

    recipeBox.scrollIntoView();
    viewNutritions(recipe.nutrition);
  }
};

export default viewRecipe;

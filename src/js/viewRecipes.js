const viewRecipes = recipes => {
  const resultsList = document.querySelector('#resultsList');
  resultsList.classList.add('results-list');

  const html = recipes
    .map(recipe => {
      return `
   <li data-id=${recipe.id} class='results-list__item'>
   <img src="https://spoonacular.com/recipeImages/${recipe.id}-240x150.jpg"/>
   <div class="results-list__info">
   <p>${recipe.title}</p>
   <p><span>Servings: ${recipe.servings} </span> <span>Ready in: ${recipe.readyInMinutes} mins </span><p/>
   </div>
   </li>
   
   `;
    })
    .join(' ');
  resultsList.innerHTML = html;
};

export default viewRecipes;

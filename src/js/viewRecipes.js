const viewRecipes = recipes => {
  console.log("viewRecipes wywolane z index.js ");
  const resultsList = document.querySelector("#resultsList");
  resultsList.classList.add("main__list");

  const html = recipes
    .map(recipe => {
      return `
   <li data-id=${recipe.id} class='main__list-item'>
   <img src="https://spoonacular.com/recipeImages/${recipe.id}-240x150.jpg"/>
   <div class="main__info">
   <p>${recipe.title}</p>
   <p><span>Servings:${recipe.servings} </span> <span>Ready in:${recipe.readyInMinutes} mins </span><p/>
   </div>
   </li>
   
   `;
    })
    .join(" ");
  resultsList.innerHTML = html;
};

export default viewRecipes;

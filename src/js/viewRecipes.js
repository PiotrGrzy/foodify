const viewRecipes = recipes => {
  console.log("viewRecipes wywolane z index.js ");
  const resultsList = document.querySelector("#resultsList");

  const html = recipes
    .map(recipe => {
      return `
   <li data-id=${recipe.id}>
   <img src="https://spoonacular.com/recipeImages/${recipe.id}-240x150.jpg"/>
   <p>${recipe.title}</p>
   <p><span>Servings:${recipe.servings} </span> <span>Ready in:${recipe.readyInMinutes} mins </span><p/>
   </li>
   
   `;
    })
    .join(" ");
  resultsList.innerHTML = html;
};

export default viewRecipes;

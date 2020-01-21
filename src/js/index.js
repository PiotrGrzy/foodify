import '@babel/polyfill';
import viewRecipes from './viewRecipes';
import viewRecipe, { clearRecipeView } from './viewRecipe';
import { clearDetails } from './viewNutritions';

const apiKey = '341d33626f6f4b33a6b63ab33d23cb72';
let searchQuery = '';
let numberOfResults = 10;
let results = [];

const searchForm = document.querySelector('#mainForm');
const searchInput = document.querySelector('#searchInput');
const resultsNumberSelect = document.querySelector('#resultsNumber');
const resultsList = document.querySelector('#resultsList');
const recipeBox = document.querySelector('#recipeBox');
const loader = document.querySelector('#loader');

// Fetch list of recipes
const getRecipes = async () => {
  loader.style.display = 'block';
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${searchQuery}&number=${numberOfResults}`
    );
    const data = await response.json();
    loader.style.display = 'none';
    return data.results;
  } catch (err) {
    err => console.log(err);
  }
};

//Fetch single recipe info
const getRecipe = async id => {
  loader.style.display = 'block';
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`
    );
    const data = await response.json();
    loader.style.display = 'none';
    return data;
  } catch (err) {
    err => console.log(err);
  }
};

// Form submit handler
const onSubmit = async e => {
  e.preventDefault();
  if (searchInput.value !== '') {
    // Get recipes with query and number of results
    searchQuery = searchInput.value;
    numberOfResults = resultsNumberSelect.value;
    results = await getRecipes();
    // Reset results
    viewRecipes(results);
    clearRecipeView();
    clearDetails();
    searchInput.value = '';
  }
};

// List click handler
const onListClick = async e => {
  if (e.target.closest('li').tagName === 'LI') {
    const recipeId = e.target.closest('li').dataset.id;
    const recipe = await getRecipe(recipeId);
    viewRecipe(recipe);
  }
};

resultsList.addEventListener('click', onListClick);
recipeBox.addEventListener('click', () => getNutrition(singleRecipe));
searchForm.addEventListener('submit', onSubmit);

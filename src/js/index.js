import "@babel/polyfill";
import viewRecipes from "./viewRecipes";
import viewRecipe from "./viewRecipe";

const apiKey = "341d33626f6f4b33a6b63ab33d23cb72";
let searchQuery = "";
let numberOfResults = 10;
let results = [];

const searchForm = document.querySelector("#mainForm");
const searchInput = document.querySelector("#searchInput");
const resultsNumberSelect = document.querySelector("#resultsNumber");
const resultsList = document.querySelector("#resultsList");

const getRecipes = async () => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${searchQuery}&number=${numberOfResults}`
    );
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (err) {
    err => console.log(err);
  }
};

const getRecipe = async id => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=false`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    err => console.log(err);
  }
};

const onSubmit = async e => {
  e.preventDefault();
  if (searchInput.value !== "") {
    searchQuery = searchInput.value;
    numberOfResults = resultsNumberSelect.value;
    results = await getRecipes();
    console.log(results);
    viewRecipes(results);
    searchInput.value = "";
  }
};

const onListClick = async e => {
  if (e.target.closest("li").tagName === "LI") {
    const recipeId = e.target.closest("li").dataset.id;
    const recipe = await getRecipe(recipeId);
    viewRecipe(recipe);
  }
};

resultsList.addEventListener("click", onListClick);
searchForm.addEventListener("submit", onSubmit);

// const menuIcon = document.querySelector(".menu-icon");
// const nav = document.querySelector(".nav");

// menuIcon.addEventListener("click", function() {
//   nav.classList.toggle("nav-active");
// });

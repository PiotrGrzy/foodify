import "@babel/polyfill";
import viewRecipes from "./viewRecipes";

const apiKey = "341d33626f6f4b33a6b63ab33d23cb72";
let searchQuery = "";
let numberOfResults = 10;
let results = [];

const searchForm = document.querySelector("#mainForm");
const searchInput = document.querySelector("#searchInput");
const resultsNumberSelect = document.querySelector("#resultsNumber");

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

const onSubmit = async e => {
  e.preventDefault();
  if (searchInput.value !== "") {
    searchQuery = searchInput.value;
    numberOfResults = resultsNumberSelect.value;
    results = await getRecipes();
    viewRecipes(results);
    console.log(results);
    searchInput.value = "";
  }
};
searchForm.addEventListener("submit", onSubmit);
console.log("connected");

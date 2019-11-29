const details = document.querySelector("#recipeDetails");

export const clearDetails = () => {
  details.innerHTML = "";
  details.classList.remove("main__details");
};

const viewNutritions = nutritions => {
  details.classList.add("main__details");

  const nutrients = nutritions.nutrients
    .map(
      item => `<li>
    ${item.title}: ${item.amount} ${item.unit}
</li>`
    )
    .join(" ");

  const html = `
    <h5>Nutritions daily demand:</h5>
    <ul class="main__bars">
    <li class="bar-container"><span class="bar-inner bar-inner--1">Carbs: ${nutritions.caloricBreakdown.percentCarbs} % </span> </li>


    <li class="bar-container"><span class="bar-inner bar-inner--2">Fat: ${nutritions.caloricBreakdown.percentFat} % </span> </li>

    <li class="bar-container"><span class="bar-inner bar-inner--3">Proteins: ${nutritions.caloricBreakdown.percentProtein} % </span> </li>


    </ul>
    <h5>Detailed Nutrients:</h5>
    <ul class="main__nutrients">${nutrients}</ul>
    `;
  details.innerHTML = html;
};

export default viewNutritions;

import fetchFilms from "./renderFilms.js";
import fetchPeople from "./renderPeople.js";
import fetchPlanets from "./renderPlanets.js";
import fetchVehicles from "./renderVehicles.js";

//Fetching html elements
const filmsButton = document.querySelector(".navbar__button--films");
const peopleButton = document.querySelector(".navbar__button--people");
const planetsButton = document.querySelector(".navbar__button--planets");
const vehiclesButton = document.querySelector(".navbar__button--vehicles");

filmsButton.addEventListener("click", fetchFilms);
peopleButton.addEventListener("click", fetchPeople);
planetsButton.addEventListener("click", fetchPlanets);
vehiclesButton.addEventListener("click", fetchVehicles);

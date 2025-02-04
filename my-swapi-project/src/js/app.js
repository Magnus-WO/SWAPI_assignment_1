import fetchFilms from "./renderFilms.js";
import fetchPeople from "./fetchPeople.js";
import fetchPlanets from "./fetchPlanets.js";

//Fetching html elements
const filmsButton = document.querySelector(".navbar__button--films");
const peopleButton = document.querySelector(".navbar__button--people");
const planetsButton = document.querySelector(".navbar__button--planets");
const vehiclesButton = document.querySelector(".navbar__button--vehicles");

const main = document.querySelector(".main");

filmsButton.addEventListener("click", fetchFilms);
peopleButton.addEventListener("click", fetchPeople);
planetsButton.addEventListener("click", fetchPlanets);

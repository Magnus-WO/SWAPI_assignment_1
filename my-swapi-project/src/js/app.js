import fetchFilms from "./films.js";

//Fetching html elements
const filmsButton = document.querySelector(".navbar__button--films");
const peopleButton = document.querySelector(".navbar__button--people");
const planetsButton = document.querySelector(".navbar__button--planets");
const vehiclesButton = document.querySelector(".navbar__button--vehicles");

const main = document.querySelector(".main");

fetchFilms();

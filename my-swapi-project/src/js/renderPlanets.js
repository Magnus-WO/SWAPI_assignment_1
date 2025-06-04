import planetsImages from "./planetsImages 2.js";
import fetchPlanets from "./fetchPlanets.js";

//Fetching html elements
const planetsButton = document.querySelector(".navbar__button--planets");
const main = document.querySelector(".main");

//Rendering
const renderPlanets = (planets) => {
  main.textContent = "";
  planets.forEach((planet) => {
    // Creating elements
    const card = document.createElement("div");
    const name = document.createElement("h1");
    const planetImage = document.createElement("img");
    const infoContainer = document.createElement("div");

    const climate = document.createElement("p");
    const orbitalPeriode = document.createElement("p");
    const rotationPeriode = document.createElement("p");
    const terrain = document.createElement("p");

    //Getting info
    name.textContent = planet.name;
    planetsImages.forEach((image) => {
      if (planet.name === image.name) {
        planetImage.setAttribute("src", `${image.src}`);
      }
    });
    climate.textContent = `Climate: ${planet.climate}`;
    orbitalPeriode.textContent = `Length of year: ${planet.orbital_period} days`;
    rotationPeriode.textContent = `Length of day: ${planet.rotation_period} hours`;
    terrain.textContent = `Terrain: ${planet.terrain}`;

    //Adding classes
    card.classList.add("card");
    planetImage.classList.add("card__planet-image");
    infoContainer.classList.add("card__planet-info");

    //Appending
    main.append(card);
    card.append(name, planetImage, infoContainer);
    infoContainer.append(orbitalPeriode, rotationPeriode, climate, terrain);
  });

  return;
};
export default renderPlanets;
//Name, climate, orbital period, terrain, rotation period

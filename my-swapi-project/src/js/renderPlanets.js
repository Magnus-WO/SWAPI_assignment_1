import planetsImages from "./planetsImages.js";
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
    orbitalPeriode.textContent = `Length of year: ${planet.orbital_period}`;
    rotationPeriode.textContent = `Length of day (in hours): ${planet.rotation_period}`;
    terrain.textContent = `Terrain: ${planet.terrain}`;

    //Adding classes
    card.classList.add("card");
    planetImage.classList.add("card__planet-image");

    //Appending
    main.append(card);
    card.append(
      name,
      planetImage,
      orbitalPeriode,
      rotationPeriode,
      climate,
      terrain
    );
  });

  return;
};
export default renderPlanets;
//Name, climate, orbital period, terrain, rotation period

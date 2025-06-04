import planetsImages from "./planetsImages 2.js";

//Fetching html elements
const planetsButton = document.querySelector(".navbar__button--planets");
const main = document.querySelector(".main");
const introParagraph = document.querySelector(".intro__paragraph");
const feedBackParagraph = document.querySelector(".feedback__paragraph");

let planets = [];
//  Fetching
const fetchPlanets = async () => {
  try {
    const response = await fetch("https://swapi.tech/api/planets");
    const data = await response.json();
    planets = data.results;

    return;
  } catch (error) {
  } finally {
    renderPlanets(planets);
  }
};

//Rendering
const renderPlanets = (planets) => {
  if (planets.length === 0) {
    feedBackParagraph.textContent =
      "Could not retrieve planets, please try again later";
    setInterval(() => {
      feedBackParagraph.textContent = "";
    }, 5000);
    return;
  } else {
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
      return planet;
    });
  }
};
export default fetchPlanets;

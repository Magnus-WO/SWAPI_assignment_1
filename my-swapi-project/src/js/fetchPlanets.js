import renderPlanets from "./renderPlanets.js";
const fetchPlanets = async () => {
  try {
    const response = await fetch("https://swapi.tech/api/planets");
    const data = await response.json();
    const planets = data.results;

    renderPlanets(planets);
    return;
  } catch (error) {
    console.log(error, "Please try again later");
  }
};
export default fetchPlanets;

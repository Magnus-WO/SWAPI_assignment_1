import renderPlanets from "./renderPlanets.js";
const fetchPlanets = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/planets");
    const data = await response.json();
    const planets = data.results;
    console.log(planets);

    renderPlanets(planets);
    return;
  } catch (error) {
    console.log(error, "Please try again later");
  }
};
export default fetchPlanets;

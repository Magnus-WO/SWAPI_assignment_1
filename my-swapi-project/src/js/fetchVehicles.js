import renderVehicles from "./renderVehicles.js";
const fetchVehicles = async () => {
  try {
    const response = await fetch("https://swapi.tech/api/vehicles");
    const data = await response.json();
    const vehicles = data.results;

    renderVehicles(vehicles);
    return;
  } catch (error) {
    console.log(error);
  }
};

export default fetchVehicles;

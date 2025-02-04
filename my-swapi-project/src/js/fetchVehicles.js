import renderVehicles from "./renderVehicles.js";
const fetchVehicles = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/vehicles");
    const data = await response.json();
    const vehicles = data.results;
    console.log(vehicles);

    renderVehicles(vehicles);
    return;
  } catch (error) {
    console.log(error);
  }
};

export default fetchVehicles;

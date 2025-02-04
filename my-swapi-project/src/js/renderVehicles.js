import vehicleImages from "./vehiclesImages.js";

//Fetching html elements
const main = document.querySelector(".main");

//Rendering
const renderVehicles = (vehicles) => {
  main.textContent = "";
  vehicles.forEach((vehicle) => {
    //Creating elements
    const card = document.createElement("div");
    const name = document.createElement("h1");
    const vehicleImage = document.createElement("img");

    const infoContainer = document.createElement("div");
    const crewSize = document.createElement("p");
    const passengers = document.createElement("p");
    const cost = document.createElement("p");
    const manufacturer = document.createElement("p");

    //Getting info
    name.textContent = vehicle.name;
    vehicleImages.forEach((image) => {
      if (vehicle.name === image.name) {
        vehicleImage.setAttribute("src", `${image.src}`);
      }
    });
    crewSize.textContent = `It holds a crew of ${vehicle.crew}`;
    passengers.textContent = `It can carry ${vehicle.passengers} passenger(s)`;
    cost.textContent = `It costs${vehicle.cost_in_credits} credits`;
    manufacturer.textContent = `It is manufactured by ${vehicle.manufacturer}`;

    //Adding classes

    card.classList.add("card");
    vehicleImage.classList.add("card__vehicle-image");
    infoContainer.classList.add("card__vehicle-info");

    //appending
    main.append(card);
    card.append(name, vehicleImage, infoContainer);
    infoContainer.append(crewSize, passengers, cost, manufacturer);
  });
  return;
};

export default renderVehicles;

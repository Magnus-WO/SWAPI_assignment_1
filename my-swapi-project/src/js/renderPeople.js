import fetchPeople from "./fetchPeople.js";
import peopleImages from "./peopleImageArray.js";
const main = document.querySelector(".main");

const renderPeople = (persons) => {
  main.textContent = "";
  persons.forEach((person) => {
    // Creating elements
    const card = document.createElement("div");
    const name = document.createElement("h1");
    const image = document.createElement("img");
    const birthYear = document.createElement("p");
    const height = document.createElement("p");
    const eyeColor = document.createElement("p");
    const gender = document.createElement("p");

    // Getting info
    name.textContent = person.name;
    peopleImages.forEach((personImage) => {
      if (person.name.toLowerCase() === personImage.name.toLowerCase()) {
        image.setAttribute("src", `${personImage.src}`);
      }
    });
    birthYear.textContent = `Born in ${person.birth_year}`;
    height.textContent = `${person.height}cm in height`;
    eyeColor.textContent = `Eye color: ${person.eye_color} `;
    gender.textContent = `Gender: ${person.gender}`;

    //Adding classes
    card.classList.add("card");
    card.classList.add("card--people");
    image.classList.add("card__image");
    birthYear.classList.add("people__info");
    height.classList.add("people__info");
    eyeColor.classList.add("people__info");
    gender.classList.add("people__info");

    //Appending
    card.append(name, image, birthYear, height, eyeColor, gender);
    main.append(card);
  });
};
// Name, birth year, height, eye color, gender
export default renderPeople;

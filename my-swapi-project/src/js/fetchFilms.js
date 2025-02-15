import { renderFilms } from "./renderFilms.js";
//Fetching film data from API
const fetchFilms = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const films = data.results;
    console.log(films);

    renderFilms(films);
    return films;
  } catch (error) {
    console.log(error, "Failed");
  }
};

export default fetchFilms;

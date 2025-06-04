import renderFilms from "./renderFilms";
//Fetching film data from API
// const fetchFilms = async () => {
//   try {
//     const response = await fetch("https://www.swapi.tech/api/films/");
//     const data = await response.json();

//     const films = data.result;
//     renderFilms(films);
//     return films;
//   } catch (error) {
//     console.log(error, "Failed");
//   }
// };

export default fetchFilms;

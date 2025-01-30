import filmPosters from "./filmsArray.js";

filmPosters.forEach((poster) => {
  if (film.title === poster.title) {
    image.setAttribute("src", `${poster.src}`);
  }
});

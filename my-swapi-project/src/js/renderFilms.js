import filmPosters from "./filmsPostersArray.js";
import fetchFilms from "./fetchFilms.js";

//Fetching html elements
const filmsButton = document.querySelector(".navbar__button--films");
const main = document.querySelector(".main");

//Function for rendering

export const renderFilms = (films) => {
  main.textContent = "";
  films.forEach((film) => {
    //Creating elements
    const card = document.createElement("div");
    const title = document.createElement("h1");
    const image = document.createElement("img");
    const episodeNr = document.createElement("h2");
    const producer = document.createElement("p");
    const releaseDate = document.createElement("p");

    const crawlButton = document.createElement("button");
    const crawlContainer = document.createElement("div");
    const crawlText = document.createElement("p");

    //Getting info
    title.textContent = film.title;
    filmPosters.forEach((poster) => {
      if (film.title === poster.title) {
        image.setAttribute("src", `${poster.src}`);
      }
    });
    episodeNr.textContent = `Episode ${film.episode_id}`;
    producer.textContent = `Produced by ${film.producer}`;
    releaseDate.textContent = `Released ${film.release_date}`;
    crawlButton.textContent = "Opening Crawl";
    crawlText.textContent = film.opening_crawl;

    //Adding classes
    card.classList.add("card");
    title.classList.add("card-property");
    title.classList.add("card-property--1");

    image.classList.add("card__image");

    episodeNr.classList.add("card-property");
    episodeNr.classList.add("card-property--2");

    producer.classList.add("card-property");
    producer.classList.add("card-property--3");

    crawlButton.classList.add("card__crawl-button");
    crawlContainer.classList.add("card__crawl-container");
    crawlContainer.classList.add("collapse");
    crawlText.classList.add("card__crawl-text");

    //Appending
    main.append(card);
    card.append(
      episodeNr,
      title,
      image,
      producer,
      releaseDate,
      crawlButton,
      crawlContainer
    );

    crawlContainer.append(crawlText);

    crawlButton.addEventListener("click", () => {
      crawlContainer.classList.toggle("collapse");
    });

    return film;
  });
};

//Title, image, episode nr, release date, crawl, planets, characters
export default fetchFilms;

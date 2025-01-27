//Fetching html elements
const filmsButton = document.querySelector(".navbar__button--films");
const main = document.querySelector(".main");
const showcase = document.querySelector(".showcase");

//Fetching data from API
const fetchFilms = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const films = data.results;
    console.log(films);

    render(films);
  } catch (error) {
    console.log(error, "Failed");
  }
};

//Function for rendering

const render = (films) => {
  main.textContent = "";
  films.forEach((film) => {
    //Creating elements
    const card = document.createElement("div");
    const title = document.createElement("h1");
    const image = document.createElement("img");
    const episodeNr = document.createElement("h2");
    const producer = document.createElement("p");

    const crawlButton = document.createElement("button");
    const crawlContainer = document.createElement("div");
    const crawlText = document.createElement("p");

    const charactersButton = document.createElement("button");
    const charactersContainer = document.createElement("div");
    const charactersList = document.createElement("ul");

    //Getting info
    title.textContent = film.title;
    image.setAttribute("src", "");
    episodeNr.textContent = `Episode ${film.episode_id}`;
    producer.textContent = `Produced by ${film.producer}`;
    crawlButton.textContent = "Opening Crawl";
    crawlText.textContent = film.opening_crawl;
    charactersButton.textContent = "Characters";

    //Adding classes
    card.classList.add("card");
    title.classList.add("card-property");
    title.classList.add("card-property--1");

    image.classList.add("card__image");

    episodeNr.classList.add("card-property");
    episodeNr.classList.add("card-property--2");

    producer.classList.add("card-property");
    producer.classList.add("card-property--3");

    crawlContainer.classList.add("card__crawl-container");
    crawlText.classList.add("card__crawl-text");

    //Appending
    main.append(card);
    card.append(
      title,
      image,
      episodeNr,
      producer,
      crawlButton,
      charactersButton
    );
  });
};

//Title, image, episode nr, release date, crawl, planets, characters
export default fetchFilms;

import renderPeople from "./renderPeople.js";

const fetchPeople = async () => {
  try {
    const response = await fetch(`https:swapi.dev/api/people`);
    const data = await response.json();
    const persons = data.results;

    renderPeople(persons);
    console.log(persons);
    return persons;
  } catch (error) {
    console.log(error, "Failed");
  }
};

export default fetchPeople;

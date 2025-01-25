const test = async () => {
  try {
    const response = await fetch("https:swapi.dev/api/planets/1/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error, "wrong");
  }
};

export default test;

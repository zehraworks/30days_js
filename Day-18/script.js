// Level 1
//1
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    console.log(
      data.map((item) => [
        item.name,
        item.capital,
        item.languages.map((i) => i.name),
        item.population,
        item.area,
      ])
    );
  })
  .catch(() => console.log("error"));

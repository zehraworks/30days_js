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

  // Level 2
  //1
  const fetchData = async () => {
    try {
      const response = await fetch(catsAPI)
      const cats = await response.json()
      console.log(cats.map(item => item.name))
    } catch (err) {
      console.error(err)
    }
}
fetchData()
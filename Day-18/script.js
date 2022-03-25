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
    const response = await fetch(catsAPI);
    const cats = await response.json();
    console.log(cats.map((item) => item.name));
  } catch (err) {
    console.error(err);
  }
};
fetchData();

// Level 3
//1
fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    let average = data.map(
      (item) =>
        item.weight.metric
          .split("-")
          .reduce((acc, cur) => Number(acc) + Number(cur), 0) / 2
    );
    console.log(average);
  })
  .catch(() => console.log("error"));

//2
fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    let countryWithArea = data
      .map((item) => [item.name, item.area])
      .sort((a, b) => {
        return b[1] - a[1];
      })
      .slice(0, 10);
    console.log(countryWithArea);
  })
  .catch(() => console.log("error"));

//3
fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    let langArray = data
      .map((item) => item.languages.map((item) => item.name))
      .join(",")
      .split(",");
    const uniqueLang = new Set(langArray);
    console.log(uniqueLang.size);
  });

const input = document.querySelector("input");
const resultList = document.querySelector("ul");
const API_KEY = "4b5057d13fd90b7c50bd4726d2f7e8b7";

function makeList(object) {
  const html = `
    <li><p>Погода: ${object.weather[0].main}</p></li>
    <li><p>Опис погоди: ${object.weather[0].description}</p></li>
    <li><p>Кількість хмар: ${object.clouds.all}</p></li>
    <li><p>Вологість: ${object.main.humidity}</p></li>
    <li><p>Видимість: ${object.visibility}</p></li>
    <li><p>Швидкість вітру: ${object.wind.speed}</p></li>
    <li><p>Часовий пояс: ${object.timezone}</p></li>
    <li><p>Довгота: ${object.coord.lon}</p></li>
    <li><p>Широта: ${object.coord.lat}</p></li>
  `;
  return html;
}

input.addEventListener("input", (e) => {
  const city = e.target.value.trim();
  if (!city) return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ua&units=metric&_=${Date.now()}`
  )
    .then((res) => {
      if (!res.ok) throw new Error("Місто не знайдено");
      return res.json();
    })
    .then((data) => {
      resultList.innerHTML = makeList(data);
    })
    .catch((err) => {
      resultList.innerHTML = `<li><p style="color: red;">Помилка: ${err.message}</p></li>`;
    });
});

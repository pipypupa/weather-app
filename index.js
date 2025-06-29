const input = document.querySelector("input");
const resultList = document.querySelector("ul");
const API_KEY = "4df136a74186c04231853da9090a5dce";

function makeList(object) {
  const html = `<li><p>Погода: ${object.weather[0].main}</p></li>
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
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => (document.querySelector("ul").innerHTML = makeList(data)));
});

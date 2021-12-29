const API_WEATHER_URL = "https://wttr.in/";
const API_WEATHER_FORMAT = "?format=j1";

const temperature = document.querySelector("span.temperature");
const wind = document.querySelector("span.wind");
const humidity = document.querySelector("span.humidity");
const form = document.querySelector(".form");
const input = form.querySelector("input");
const searchButton = form.querySelector("button");

onload = weatherRequest("");

searchButton.addEventListener("click", () => {
    let city = input.value;
    weatherRequest(city);
});

function weatherRequest(city) {
    fetch(`${API_WEATHER_URL}${city}${API_WEATHER_FORMAT}`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            let currentCondition = response.current_condition[0];
            temperature.textContent = `${currentCondition.temp_C}°C`;
            wind.textContent = `${currentCondition.windspeedKmph} Km/h`;
            humidity.textContent = `${currentCondition.humidity}%`;
        });
}

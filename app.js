//init weather class
const weather = new Weather('Belgrade', 'Serbia');

document.addEventListener('DOMContentLoaded',getWeather);

function getWeather() {
    weather.getWeather()
        .then(results => console.log(results))
        .catch(err => console.log(err));
}
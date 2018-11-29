//init storage class
const storage = new Storage();
//

//init weather class
const weather = new Weather(storage.getLocationData());

document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', changeWeather);

ui = new Ui();

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);

        })
        .catch(err => console.log(err));
}


function changeWeather() {
    const cityInput = document.getElementById('city').value;

    weather.changeLocation(cityInput);
    storage.setLocationData(cityInput);
    getWeather();
}
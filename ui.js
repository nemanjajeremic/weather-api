class Ui {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }
    
    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = (weather.main.temp-273.15).toFixed(0) + '°C';
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
        this.dewpoint.textContent = `Temp range: Min: ${(weather.main.temp_min-273.15).toFixed(0)}°C Max: ${(weather.main.temp_max-273.15).toFixed(0)}°C`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed}, wind direction: ${weather.wind.deg} degrees`;
    }
}
class Weather {
    constructor(city, country) {
        this.apiKey = '66780f1edbfdc2d366fca8ec08021ad7';
        this.city = city;
        this.country = country;
    }


    //fetch weather from apu
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);
        const data = await response.json();

        return data;
    }

    //cahnge location

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}
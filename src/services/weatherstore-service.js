import cityJson from '../city-json'

export default class WeatherstoreService {
    data = cityJson;

    _apiKey = '739af9a8de0fc0ed2cf71902e4d461c0';

    async getResource(cityId, type) {

        const res = await fetch(`http://api.openweathermap.org/data/2.5/${type}?id=${cityId}&appid=${this._apiKey}`);

        if (!res.ok) {
            throw new Error(`Could not fetch  and res status ${res.status}`)
        }
        return await res.json();
    }

    getTodayWeather(cityId) {
        return this.getResource(cityId,'weather');
    }

    getFiveDayWeather(cityId) {
        return this.getResource(cityId,'forecast');
    }

    getCities() {
        return new Promise((resolve) => {
                resolve(this.data)
        });
    }
}
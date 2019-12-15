import moment from 'moment';
import { Forecast, Timeslice, weatherStore } from '../../../stores/Weather.store';

class WeatherService {
    private APP_ID = '56b00a1646d0c0ee53e24eaa14d0d536';
    public city = "edinburgh,GB";

    public fetchForecast = () => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&APPID=${this.APP_ID}&units=metric`)
            .then(res => res.json())
            .then((res: Forecast) => {                
                const dataFormatted: Forecast = res.list.reduce((acc: Forecast, curr: Timeslice) => {
                    const date = moment(curr.dt_txt).format('DD-MM-YYYY')
                    acc[date] = acc[date] || [];

                    return {
                        ...acc,
                        [date]: [
                            ...acc[date],
                            { ...curr }
                        ]
                    }
                    
                }, {});                

                weatherStore.updateForecast(dataFormatted);
            });
    }
}

const weatherService = new WeatherService();

export { weatherService };
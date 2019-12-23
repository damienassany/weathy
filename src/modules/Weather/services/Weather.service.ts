import moment from 'moment';
import { Forecast, Timeslice, weatherStore } from '../../../stores/Weather.store';

class WeatherService {
    private APP_ID = process.env['REACT_APP_APPLICATION_ID'];
    public city = "edinburgh,GB";

    public fetchForecast = () => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&APPID=${this.APP_ID}&units=metric`)
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
            })
            .catch(e => {
                console.log({ e });
                weatherStore.updateError(e.message);
            });
    }
}

const weatherService = new WeatherService();

export { weatherService };
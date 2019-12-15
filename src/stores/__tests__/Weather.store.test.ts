import { WeatherStore, Forecast, Timeslice } from "../Weather.store";

describe("Weather.store", () => {
    const store = new WeatherStore();
    const forecast: Forecast = {
        '2019-12-15': [
            {
                dt_txt: '2019-12-15 00:00:00',
                main: {
                    feels_like: 2,
                    temp: 5
                },
                weather: [
                    {
                        description: 'broken clouds',
                        icon: "01d",
                        id: 23,
                        main: 'Rain'
                    }
                ]
            }
        ]
    };
    
    it('should update currentDate', () => {
        store.updateCurrentDate('new date');

        expect(store.currentDate).toEqual('new date');
    });

    it('should update current timeslice index', () => {
        expect(store.currentSelectedTimesliceIndex).toEqual(0)
        store.updateCurrentSelectedTimesliceIndex(1);
        expect(store.currentSelectedTimesliceIndex).toEqual(1)
    });

    it('should update forecast', () => {
        expect(store.forecast).toEqual({})


        store.updateForecast(forecast)

        expect(store.forecast).toEqual(forecast)
    });

    it('should return the current timeslice', () => {
        store.updateCurrentDate('2019-12-15');
        store.updateForecast({
            ...forecast,
            '2019-12-15': [
                ...forecast['2019-12-15'],
                {
                    dt_txt: '2019-12-15 03:00:00',
                    main: {
                        feels_like: 2,
                        temp: 5
                    },
                    weather: [
                        {
                            description: 'suun',
                            icon: "01d",
                            id: 24,
                            main: 'Sunny'
                        }
                    ]    
                }
            ]
        });

        expect((store.currentTimeslice as Timeslice).dt_txt).toEqual('2019-12-15 00:00:00');
    });
});
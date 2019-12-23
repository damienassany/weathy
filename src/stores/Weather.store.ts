import { observable, action, computed } from "mobx";
import moment from "moment";
import { Icons } from "../shared/components/Icon";

export type Timeslice = {
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: keyof typeof Icons;
  }[];
};

export type Forecast = {
  [key: string]: Timeslice[];
};

export class WeatherStore {
  @observable forecast: Forecast = {};
  @observable currentDate: string = moment().format("DD-MM-YYYY");
  @observable currentSelectedTimesliceIndex = 0;
  @observable error: string | null = null;

  @action updateForecast = (data: Forecast) => {
    this.forecast = data;
  };

  @action updateCurrentDate = (date: string) => {
    this.currentDate = date;
    this.currentSelectedTimesliceIndex = 0;
  }

  @action updateCurrentSelectedTimesliceIndex = (index: number) => {
    this.currentSelectedTimesliceIndex = index;
  }

  @action updateError = (error: string) => {
    this.error = error;
  }

  @computed get currentTimeslice() {
    return this.forecast[this.currentDate] 
        ? this.forecast[this.currentDate][this.currentSelectedTimesliceIndex]
        : null;
  };
}

const weatherStore = new WeatherStore();

export { weatherStore };

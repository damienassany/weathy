import { Stores } from "../../../stores";
import { inject } from "mobx-react";
import { Weather } from "../components/Weather.component";
import { weatherService } from "../services/Weather.service";
import { Timeslice, Forecast, weatherStore } from "../../../stores/Weather.store";

export type WeatherProps = {
    fetchForecast(): void;
    currentDate: string;
    currentSelectedTimesliceIndex: number;
    forecast: Forecast;
    currentTimeslice: Timeslice | null;
    updateTimesliceIndex(index: number): void;
    updateDate(date: string): void;
    error: string | null;
    getMinMaxForThisDate(date: string): { min: number, max: number };
}

const mapStoreToProps = (stores: Stores): WeatherProps => ({
    fetchForecast: weatherService.fetchForecast,
    currentDate: stores.weatherStore.currentDate,
    currentSelectedTimesliceIndex: stores.weatherStore.currentSelectedTimesliceIndex,
    currentTimeslice: stores.weatherStore.currentTimeslice,
    forecast: stores.weatherStore.forecast,
    updateTimesliceIndex: stores.weatherStore.updateCurrentSelectedTimesliceIndex,
    updateDate: stores.weatherStore.updateCurrentDate,
    error: stores.weatherStore.error,
    getMinMaxForThisDate: weatherStore.getMinAndMaxForThisDate
});

export const WeatherContainer = inject(mapStoreToProps)(Weather);

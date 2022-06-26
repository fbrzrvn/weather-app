import { MappedWeatherResponse, WeatherResponse } from "model/weather-response";

export const weatherResponseMapped = (
  source: WeatherResponse,
): MappedWeatherResponse => {
  const mappedWeatherResponse = {
    iconId: source.weather[0].id,
    description: source.weather[0].description,
    icon: source.weather[0].icon,
    temp: source.main.temp,
    feelsLike: source.main.feels_like,
    tempMin: source.main.temp_min,
    tempMax: source.main.temp_max,
    pressure: source.main.pressure,
    humidity: source.main.humidity,
    visibility: source.visibility,
    windSpeed: source.wind.speed,
    windDeg: source.wind.deg,
    clouds: source.clouds.all,
    country: source.sys.country,
    sunrise: source.sys.sunrise,
    sunset: source.sys.sunset,
    timezone: source.timezone,
    id: source.id,
    name: source.name,
  };
  return mappedWeatherResponse;
};
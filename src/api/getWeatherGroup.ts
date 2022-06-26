import { citiesIds } from 'constants/cities';
import { weatherResponseMapped } from 'mappers/weather-response';
import { MappedWeatherResponse, WeatherResponse } from 'model/weather-response';

const fetcher = async (): Promise<MappedWeatherResponse[]> => {
  return await fetch(
    `${process.env.REACT_APP_BASE_URL}group?id=${citiesIds}&appid=${process.env.REACT_APP_API_KEY}`,
  )
    .then(async (res) => {
      const data = await res.json();
      return data.list.map((city: WeatherResponse) =>
        weatherResponseMapped(city),
      );
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export async function getWeatherGroup(): Promise<MappedWeatherResponse[]> {
  return fetcher();
}


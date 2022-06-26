import {
  faDroplet,
  faTemperatureArrowDown,
  faTemperatureArrowUp,
  faTemperatureQuarter,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { kelvinToCelsius } from 'helpers/weather-helpers';
import { MappedWeatherResponse } from 'model/weather-response';
import React from 'react';
import WeatherIcon from './Icon';
import WeatherInfo from './Info';
import {
  WeatherArticle,
  WeatherDescription,
  WeatherHeader,
  WeatherHeaderInner,
  WeatherInfoWrapper,
  WeatherTitle,
} from './styles';
import Temperature from './Temperature';
type WeatherCardProps = {
  city: MappedWeatherResponse;
};

const WeatherCard: React.FC<WeatherCardProps> = ({ city }) => {
  const timeFromUtc = city.timezone / 3600;
  console.log(new Date().toISOString());

  return (
    <WeatherArticle>
      <WeatherHeader>
        <WeatherHeaderInner>
          <Temperature
            icon={faTemperatureQuarter}
            value={kelvinToCelsius(city.temp)}
          />
          <WeatherDescription>{city.description}</WeatherDescription>
        </WeatherHeaderInner>
        <WeatherIcon code={city.iconId} />
      </WeatherHeader>
      <WeatherTitle>{`${city.name}, ${city.country}`}</WeatherTitle>
      <WeatherInfoWrapper>
        <WeatherInfo
          name="Feel likes"
          value={`${kelvinToCelsius(city.feelsLike)}°C`}
        />
        <WeatherInfo
          name="Temp max"
          value={`${kelvinToCelsius(city.tempMax)}°C`}
          icon={faTemperatureArrowUp}
        />
        <WeatherInfo
          name="Temp min"
          value={`${kelvinToCelsius(city.tempMin)}°C`}
          icon={faTemperatureArrowDown}
        />
        <WeatherInfo
          name="Humidity"
          value={`${city.humidity}%`}
          icon={faDroplet}
        />
        <WeatherInfo
          name="Wind speed"
          value={`${Math.trunc(city.windSpeed)}m/s`}
          icon={faWind}
        />
      </WeatherInfoWrapper>
    </WeatherArticle>
  );
};

export default WeatherCard;

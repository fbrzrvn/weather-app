import { faFaceDizzy } from '@fortawesome/free-solid-svg-icons';
import ErrorMsg from 'components/shared/ErrorMsg';
import WeatherCard from 'components/WeatherCard';
import { MappedWeatherResponse } from 'model/weather-response';
import React from 'react';
import { MainContainer } from './styles';

type MainProps = {
  weatherData: MappedWeatherResponse[];
  searchValue: string;
};

const Main: React.FC<MainProps> = ({ weatherData, searchValue }) => {
  const matchedCity = weatherData.filter((city) =>
    city.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  );

  return (
    <MainContainer>
      {searchValue
        ? matchedCity.map((city) => <WeatherCard key={city.id} city={city} />)
        : weatherData?.map((city) => <WeatherCard key={city.id} city={city} />)}
      {searchValue && matchedCity.length === 0 && (
        <ErrorMsg errorMsg="City not found!" icon={faFaceDizzy} />
      )}
    </MainContainer>
  );
};

export default Main;

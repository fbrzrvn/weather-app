import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { getWeatherGroup } from 'api/getWeatherGroup';
import { MappedWeatherResponse } from 'model/weather-response';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Input from '../components/Input';
import Main from '../components/Main';
import ErrorMsg from '../components/shared/ErrorMsg';
import Loading from '../components/shared/Loading';

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState([] as MappedWeatherResponse[]);
  const [searchValue, setSearchValue] = useState('');

  const { data, error, isError, isLoading } = useQuery<
    MappedWeatherResponse[],
    Error
  >(['weatherGroup'], () => getWeatherGroup(), {
    staleTime: Infinity,
  });

  useEffect(() => {
    setWeatherData(data || []);
  }, [data]);

  return (
    <div className="container">
      <h1 className="app-title">Weather App - Code challenge</h1>
      {isLoading && <Loading />}
      {isError && error && <ErrorMsg errorMsg={error.message} icon={faCogs} />}
      {data && (
        <>
          <Input searchValue={searchValue} setSearchValue={setSearchValue} />
          <Main weatherData={weatherData} searchValue={searchValue} />
        </>
      )}
    </div>
  );
};

export default Home;

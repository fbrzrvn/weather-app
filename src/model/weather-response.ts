export type WeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  id: number;
  name: string;
};

export type WeatherGroupResponse = {
  cnt: number;
  list: WeatherResponse[];
};

export type MappedWeatherResponse = {
  iconId: number;
  description: string;
  icon: string;
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  pressure: number;
  humidity: number;
  visibility: number;
  windSpeed: number;
  windDeg: number;
  clouds: number;
  country: string;
  sunrise: number;
  sunset: number;
  timezone: number;
  id: number;
  name: string;
};

export const kelvinToCelsius = (value: number): number | string => {
  if (!value) {
    return 'No data to convert. Invalid type.';
  }
  return Math.trunc(value - 273.15);
};

export const kelvinToFahrenheit = (value: number): number | string => {
  if (!value) {
    return 'No data to convert. Invalid type.';
  }
  return Math.trunc((value - 273.15) * 9 / 5 + 32);
};

export const meterSecToKilometersHour = (value: number): number | string => {
  if (!value) {
    return 'No data to convert. Invalid type.';
  }
  return Math.trunc((value * (60 * 60)) / 1000);
};

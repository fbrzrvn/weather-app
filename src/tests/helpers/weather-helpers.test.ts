import {
  kelvinToCelsius,
  kelvinToFahrenheit,
  meterSecToKilometersHour,
} from 'helpers/weather-helpers';

describe('All weather-helpers should return the correct value', () => {
  it('toCelsius should return the correct kelvin temperature', () => {
    const toConvert = 300;
    const expected = 26;
    const result = kelvinToCelsius(toConvert);
    expect(result).toBe(expected);
  });

  it('toFahrenheit should return the correct fahrenheit temperature', () => {
    const toConvert = 422.039;
    const expected = 300;
    const result = kelvinToFahrenheit(toConvert);
    expect(result).toBe(expected);
  });

  it('toKilometersHour should return the correct wind speed', () => {
    const toConvert = 20;
    const expected = 72;
    const result = meterSecToKilometersHour(toConvert);
    expect(result).toBe(expected);
  });

  it('any method should return no data message if temperature is undefined or NaN', () => {
    var toConvert = NaN;
    var expected = 'No data to convert. Invalid type.';
    var result = kelvinToCelsius(toConvert);
    expect(result).toBe(expected);
  });
});

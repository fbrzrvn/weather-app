type City = {
  id: number;
  name: string;
}

export const cities: City[] = [
  {
    id: 3128760,
    name: 'Barcelona',
  },
  {
    id: 3117735,
    name: 'Madrid',
  },
  {
    id: 4219762,
    name: 'Rome',
  },
  {
    id: 3435910,
    name: 'Buenos Aires',
  },
  {
    id: 5128581,
    name: 'New York',
  },
  {
    id: 5391959,
    name: 'San Francisco',
  },
  {
    id: 1850144,
    name: 'Tokyo',
  },
  {
    id: 2147714,
    name: 'Sydney',
  },
  {
    id: 2988507,
    name: 'Paris',
  },
  {
    id: 2643743,
    name: 'London',
  },
  {
    id: 703448,
    name: 'Kyiv',
  },
  {
    id: 524901,
    name: 'Moscow',
  },
];

export const citiesIds: string = cities.map((city) => city.id).join();


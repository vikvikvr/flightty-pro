import axios from 'axios';
import { Flight, Airport, Airline } from 'types/interfaces';

// TODO: move to .env file
const apiEndpoint = 'https://recruitment.shippypro.com/flight-engine/api';
const authToken = 'MN9ruQV0MFEsgOzMo8crw8gB575rsTe2H5U1y2Lj';

type DataLabel = 'flights' | 'airports' | 'airlines';

// started to get HTTP: 429 Too Many Requests
const cacheDuration = 10_000;

export async function getAllFlights(): Promise<Flight[]> {
  return getFromCacheOrApi<Flight>('flights');
}

export function getAllAirports(): Promise<Airport[]> {
  return getFromCacheOrApi<Airport>('airports');
}

export function getAllAirlines(): Promise<Airline[]> {
  return getFromCacheOrApi<Airline>('airlines');
}

export function getFlightsFromTo(departureIata: string, arrivalIata: string) {
  return fetchFromApi<Flight>(
    `flights/from/${departureIata}/to/${arrivalIata}`
  );
}

async function getFromCacheOrApi<T>(label: DataLabel): Promise<T[]> {
  try {
    const data = await tryToGetFromLocalStorage<T[]>(label);
    return data;
  } catch (O_o) {
    const data = await fetchFromApi<T>(`${label}/all`);
    saveToLocalStorage<T[]>(label, data);
    return data;
  }
}

async function fetchFromApi<T>(route: string): Promise<T[]> {
  const { data } = await axios.get<{ data: T[] }>(`${apiEndpoint}/${route}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return data.data;
}

async function tryToGetFromLocalStorage<T>(label: DataLabel) {
  const data = localStorage.getItem(`${label}_data`);
  const time = localStorage.getItem(`${label}_time`);

  if (!data || !time) {
    throw Error(`${label} not saved in local cache yet, need to hit API.`);
  }

  if (Date.now() - parseInt(time) > cacheDuration) {
    throw Error(`Cache expired for ${label}, need to hit API.`);
  }

  return JSON.parse(data) as T;
}

function saveToLocalStorage<T>(label: DataLabel, data: T): void {
  localStorage.setItem(`${label}_data`, JSON.stringify(data));
  localStorage.setItem(`${label}_time`, String(Date.now()));
}

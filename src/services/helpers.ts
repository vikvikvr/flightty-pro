import axios from 'axios';
import { Airline, Airport, Flight } from 'types';

type DataLabel = 'flights' | 'airports' | 'airlines';

// **** Settings *****

let cacheDuration = 60_000;

if (process.env.REACT_APP_CACHE_DURATION) {
  cacheDuration = parseInt(process.env.REACT_APP_CACHE_DURATION);
}

// **** High level functions ****

export async function getAllFlights(): Promise<Flight[]> {
  return getFromCacheOrApi<Flight>('flights');
}

export function getAllAirports(): Promise<Airport[]> {
  return getFromCacheOrApi<Airport>('airports');
}

export function getAllAirlines(): Promise<Airline[]> {
  return getFromCacheOrApi<Airline>('airlines');
}

// **** Low level functions ****

export async function getFromCacheOrApi<T>(label: DataLabel): Promise<T[]> {
  try {
    const data = await tryToGetFromLocalStorage<T[]>(label);
    return data;
  } catch (O_o) {
    const data = await fetchFromApi<T>(`${label}/all`);
    saveToLocalStorage<T[]>(label, data);
    return data;
  }
}

export async function fetchFromApi<T>(route: string): Promise<T[]> {
  const apiUrl = `${process.env.REACT_APP_API_URL}/${route}`;
  const { data } = await axios.get<{ data: T[] }>(apiUrl, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
  });

  return data.data;
}

// **** Local storage related ****

export async function tryToGetFromLocalStorage<T>(
  label: DataLabel
): Promise<T> {
  const data = localStorage.getItem(`${label}_data`);
  const time = localStorage.getItem(`${label}_time`);

  if (!data || !time) {
    throw Error(`${label} not saved in local cache yet, need to hit API.`);
  }

  const isCacheExpired = Date.now() - parseInt(time) > cacheDuration;

  if (isCacheExpired) {
    throw Error(`Cache expired for ${label}, need to hit API.`);
  }

  return JSON.parse(data) as T;
}

export function saveToLocalStorage<T>(label: DataLabel, data: T): void {
  localStorage.setItem(`${label}_data`, JSON.stringify(data));
  localStorage.setItem(`${label}_time`, String(Date.now()));
}

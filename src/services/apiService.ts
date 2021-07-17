import { Flight, Airport, Airline } from 'types';
import * as helpers from './helpers';

export async function getAllFlights(): Promise<Flight[]> {
  return helpers.getFromCacheOrApi<Flight>('flights');
}

export function getAllAirports(): Promise<Airport[]> {
  return helpers.getFromCacheOrApi<Airport>('airports');
}

export function getAllAirlines(): Promise<Airline[]> {
  return helpers.getFromCacheOrApi<Airline>('airlines');
}

export function getFlightsFromTo(
  departureIata: string,
  arrivalIata: string
): Promise<Flight[]> {
  const route = `flights/from/${departureIata}/to/${arrivalIata}`;

  return helpers.fetchFromApi<Flight>(route);
}

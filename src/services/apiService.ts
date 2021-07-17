import { Flight, AppContext } from 'types';
import * as helpers from './helpers';

export async function getInitialData(): Promise<AppContext> {
  const airports = await helpers.getAllAirports();
  const airlines = await helpers.getAllAirlines();
  const flights = await helpers.getAllFlights();

  return { airports, airlines, flights };
}

export function getFlightsFromTo(
  departureIata: string,
  arrivalIata: string
): Promise<Flight[]> {
  const route = `flights/from/${departureIata}/to/${arrivalIata}`;

  return helpers.fetchFromApi<Flight>(route);
}

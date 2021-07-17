import { Flight, AppContext } from 'types';
import * as helpers from './helpers';

export async function getInitialData(): Promise<AppContext> {
  const [airports, airlines, flights] = await Promise.all([
    helpers.getAllAirports(),
    helpers.getAllAirlines(),
    helpers.getAllFlights(),
  ]);

  return { airports, airlines, flights };
}

export function getFlightsFromTo(
  departureIata: string,
  arrivalIata: string
): Promise<Flight[]> {
  const route = `flights/from/${departureIata}/to/${arrivalIata}`;

  return helpers.fetchFromApi<Flight>(route);
}

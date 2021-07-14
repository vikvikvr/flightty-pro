import axios from 'axios';
import { Flight, Airport } from 'types/interfaces';

// TODO: move to .env file
const apiEndpoint = 'https://recruitment.shippypro.com/flight-engine/api';
const authToken = 'MN9ruQV0MFEsgOzMo8crw8gB575rsTe2H5U1y2Lj';

export function getAllFlights() {
  return fetchFromApi<Flight>('flights/all');
}

export function getAllAirports() {
  return fetchFromApi<Airport>('airports/all');
}

async function fetchFromApi<T>(route: string): Promise<T[]> {
  const { data } = await axios.get<{ data: T[] }>(`${apiEndpoint}/${route}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return data.data;
}

import { Flight } from 'types/interfaces';

// model flights in a graph:
// airportId: node identifier
// flightId: edge identifier

const flights: Flight[] = [
  { id: 1, departureAirportId: 1, arrivalAirportId: 2, price: 0, airlineId: 1 },
  { id: 2, departureAirportId: 2, arrivalAirportId: 3, price: 0, airlineId: 1 },
  { id: 3, departureAirportId: 1, arrivalAirportId: 3, price: 0, airlineId: 1 },
  { id: 4, departureAirportId: 1, arrivalAirportId: 3, price: 0, airlineId: 1 },
];

export default flights;

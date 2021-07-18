import { Airline, Airport, Flight, PopulatedFlight } from 'types';

// **** Replaces ids with names/codes ****

export function populateFlights(
  flights: Flight[],
  airports: Airport[],
  airlines: Airline[]
): PopulatedFlight[] {
  if (!airports.length) return [];

  return flights.map((flight) => {
    const airline = airlines.find((a) => a.id === flight.airlineId);
    const departure = airports.find((a) => a.id === flight.departureAirportId);
    const arrival = airports.find((a) => a.id === flight.arrivalAirportId);

    if (!airline || !departure || !arrival) {
      throw Error(
        `Could not populate flights. Did you reload the results page?`
      );
    }

    return {
      id: flight.id,
      price: flight.price,
      airlineName: airline.name,
      departureIata: departure.codeIata,
      arrivalIata: arrival.codeIata,
    };
  });
}

export function sumFlightsCost(flights: Flight[]): number {
  return flights.reduce((totalCost, flight) => {
    return totalCost + flight.price;
  }, 0);
}

import { Flight } from 'types/interfaces';

export function getAllPathsBetween(
  departureId: number,
  arrivalId: number,
  flights: Flight[]
): Flight[][] {
  // initialize flights taken
  const flightsTaken: { [id: string]: boolean } = {};
  flights.forEach((flight) => {
    flightsTaken[flight.id] = false;
  });

  const startFlights = getFlightsFrom(departureId, flights, flightsTaken);
  const validPaths: Flight[][] = [];
  let flightsHistory: Flight[] = [];

  function takeFlights(flightsToCheck: Flight[]) {
    for (let i = 0; i < flightsToCheck.length; i++) {
      const currentFlight = flightsToCheck[i];

      // take flight
      flightsTaken[currentFlight.id] = true;
      flightsHistory.push(currentFlight);

      // check if arrived
      const isArrived = currentFlight.arrivalAirportId === arrivalId;
      if (isArrived) {
        validPaths.push([...flightsHistory]);
        flightsHistory = [];
        continue;
      }

      // check if no more flights available
      const areAllTaken = !Object.values(flightsTaken).some(
        (taken) => taken === false
      );

      if (areAllTaken) {
        flightsHistory = [];
        continue;
      }

      // can take other flights
      const nextFlights = getFlightsFrom(
        currentFlight.arrivalAirportId,
        flights,
        flightsTaken
      );

      takeFlights(nextFlights);
    }
  }

  takeFlights(startFlights);

  return validPaths;
}

function getFlightsFrom(
  departureId: number,
  flights: Flight[],
  flightsTaken: { [id: string]: boolean }
): Flight[] {
  return flights.filter((flight) => {
    if (flightsTaken[flight.id]) return false;
    return flight.departureAirportId === departureId;
  });
}

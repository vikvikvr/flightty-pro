export interface Flight {
  id: number;
  airlineId: number;
  departureAirportId: number;
  arrivalAirportId: number;
  price: number;
}

export interface Airport {
  id: number;
  codeIata: string;
  latitude: number;
  longitude: number;
}

export interface Airline {
  id: number;
  name: string;
  codeIataPrefix: string;
  logoFilename: string;
}

export interface PopulatedFlight {
  id: number;
  price: number;
  airlineName: string;
  departureIata: string;
  arrivalIata: string;
}

export interface SearchFlightQuery {
  departureIata: string;
  arrivalIata: string;
  maxFlights: number;
  maxPrice: number;
}

export interface AppContext {
  flights: Flight[];
  airports: Airport[];
  airlines: Airline[];
}

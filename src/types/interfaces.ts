// **** Entities ****

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

// **** Related to components ****

export interface AppContext {
  flights: Flight[];
  airports: Airport[];
  airlines: Airline[];
}

export interface PopulatedFlight {
  id: number;
  price: number;
  airlineName: string;
  departureIata: string;
  arrivalIata: string;
}

export interface AirportsQuery {
  departureIata: string;
  arrivalIata: string;
}

export interface RouteDescription {
  path: string;
  component: JSX.Element;
}

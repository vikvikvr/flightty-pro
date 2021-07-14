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

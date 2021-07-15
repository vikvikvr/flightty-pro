import React from 'react';
import { render, screen } from '@testing-library/react';
import FlightCard, { CardFlight } from './FlightCard';

const flights: CardFlight[] = [
  {
    departureIata: 'TRO',
    arrivalIata: 'VCE',
    id: 1,
    price: 1111,
  },
  {
    departureIata: 'VCE',
    arrivalIata: 'SFO',
    id: 2,
    price: 2222,
  },
];

describe('FlightCard', () => {
  it('should show total price', () => {
    render(<FlightCard flights={flights} totalPrice={3333} />);
    screen.getByText('€ 3333');
  });

  it('should show departure and arrival', () => {
    render(<FlightCard flights={flights} totalPrice={3333} />);
    screen.getByText('TRO • SFO');
  });

  it('should show all flights when more than 1', () => {
    render(<FlightCard flights={flights} totalPrice={3333} />);
    screen.getByText('TRO • VCE');
    screen.getByText('€ 1111');
    screen.getByText('VCE • SFO');
    screen.getByText('€ 2222');
  });
});

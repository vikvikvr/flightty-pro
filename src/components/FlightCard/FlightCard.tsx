import React from 'react';
import './FlightCard.scss';

export interface CardFlight {
  arrivalIata: string;
  departureIata: string;
  price: number;
  id: number;
}

interface Props {
  flights: CardFlight[];
  totalPrice: number;
}

function FlightCard({ flights, totalPrice }: Props) {
  let stopsString = 'Diretto';
  if (flights.length > 1) {
    stopsString = `${flights.length - 1} scali`;
  }

  return (
    <div>
      <h1>€ {totalPrice}</h1>
      <p>
        {flights[0].departureIata} • {flights[flights.length - 1].arrivalIata}
      </p>
      <button>✈</button>
      <p>{stopsString}</p>
      {flights.length > 1 && (
        <>
          <hr />
          {flights.map((flight) => (
            <div key={flight.id}>
              <p>
                {flight.departureIata} • {flight.arrivalIata}
              </p>
              <p>€ {flight.price}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FlightCard;

import React from 'react';
import { PopulatedFlight } from 'types/interfaces';
import './FlightCard.scss';

interface Props {
  flights: PopulatedFlight[];
  totalPrice: number;
}

function FlightCard({ flights, totalPrice }: Props) {
  let stopsString = 'Diretto';
  if (flights.length > 1) {
    stopsString = `${flights.length - 1} scali`;
  }

  return (
    <div>
      <h1>€ {Math.round(totalPrice * 100) / 100}</h1>
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

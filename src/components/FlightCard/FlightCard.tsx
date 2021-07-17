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
    <div className="flight-card">
      <div className="card-header">
        <h3 className="total-price">€ {Math.round(totalPrice)}</h3>
        <p className="from-to">
          {flights[0].departureIata} → {flights[flights.length - 1].arrivalIata}
        </p>
        <button>✈</button>
        <p className="price-score">miglior prezzo</p>
        <p className="airline-name small">linea aerea</p>
        <p className="stops-number">{stopsString}</p>
      </div>
      {flights.length > 1 && (
        <>
          <hr />
          <ol className="flights-list">
            {flights.map((flight) => (
              <li key={flight.id} className="flight-details">
                <p className="from-to">
                  {flight.departureIata} → {flight.arrivalIata}
                </p>
                <p className="airline-name">EasyJet</p>
                <p className="price-small">€ {Math.round(flight.price)}</p>
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}

export default FlightCard;

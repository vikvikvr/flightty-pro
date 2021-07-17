import React from 'react';
import { Link } from 'react-router-dom';

import { AirplaneIcon } from 'assets';
import { PopulatedFlight } from 'types';
import './FlightCard.scss';

interface Props {
  flights: PopulatedFlight[];
  totalPrice: number;
}

function FlightCard({ flights, totalPrice }: Props): JSX.Element {
  let stopsString = 'Diretto';
  if (flights.length > 1) {
    stopsString = `${flights.length - 1} scali`;
  }

  return (
    <div className="flight-card">
      <h1>Risultati ricerca</h1>
      <p>Ce l’hai fatta, sei ad un passo dalla partenza!</p>
      <div className="card-header">
        <h3 className="total-price">€ {Math.round(totalPrice)}</h3>
        <p className="from-to">
          {flights[0].departureIata} → {flights[flights.length - 1].arrivalIata}
        </p>
        <button className="take-flight-button">
          <AirplaneIcon className="airplane-icon" />
        </button>
        <p className="price-score">miglior prezzo</p>
        <p className="airline-name small">{flights[0].airlineName}</p>
        <p className="stops-count">{stopsString}</p>
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
                <p className="airline-name">{flight.airlineName}</p>
                <p className="price-small">€ {Math.round(flight.price)}</p>
              </li>
            ))}
          </ol>
        </>
      )}
      <Link className="search-button" to="/">
        nuova ricerca
      </Link>
    </div>
  );
}

export default FlightCard;

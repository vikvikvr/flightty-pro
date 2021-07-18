import React from 'react';
import { Link } from 'react-router-dom';

import { AirplaneIcon } from 'assets';
import { PopulatedFlight } from 'types';
import useFlightCardAnimations from './useFlightCardAnimations';
import './FlightCard.scss';

interface Props {
  flights: PopulatedFlight[];
  totalPrice: number;
}

// **** Shows details on a flight, including stop overs ****

function FlightCard({ flights, totalPrice }: Props): JSX.Element {
  useFlightCardAnimations();

  let stopsString = 'Diretto';
  if (flights.length > 1) {
    let suffix = flights.length === 2 ? 'o' : 'i';
    stopsString = `${flights.length - 1} scal${suffix}`;
  }

  return (
    <div className="flight-card">
      <h1 className="card-title">Risultati ricerca</h1>
      <p className="card-subtitle">
        Ce l’hai fatta, sei ad un passo dalla partenza!
      </p>
      <div className="card-header">
        <h3 className="total-price">€ {Math.round(totalPrice)}</h3>
        <p className="from-to">
          {flights[0].departureIata} → {flights[flights.length - 1].arrivalIata}
        </p>
        <Link to="/" className="take-flight-button">
          <AirplaneIcon className="airplane-icon" />
        </Link>
        <p className="price-score">Miglior prezzo</p>
        <p className="airline-name small">{flights[0].airlineName}</p>
        <p className="stops-count">{stopsString}</p>
      </div>
      {flights.length > 1 && (
        <>
          <hr className="horizontal-line" />
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
      <div className="search-button-container">
        <Link className="search-button" to="/">
          indietro
        </Link>
      </div>
    </div>
  );
}

export default FlightCard;

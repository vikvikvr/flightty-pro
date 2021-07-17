import React from 'react';
import { Link } from 'react-router-dom';
import { PopulatedFlight } from 'types/interfaces';
import './FlightCard.scss';
import { AirplaneIcon } from 'assets/icons';

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
      <h1>Risultati ricerca</h1>
      <p>Ce l’hai fatta, sei ad un passo dalla partenza!</p>
      <div className="card-header">
        <h3 className="total-price">€ {Math.round(totalPrice)}</h3>
        <p className="from-to">
          {flights[0].departureIata} → {flights[flights.length - 1].arrivalIata}
        </p>
        <button>
          <AirplaneIcon />
        </button>
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
      <Link className="search-icon" to="/">
        🔎
      </Link>
    </div>
  );
}

export default FlightCard;

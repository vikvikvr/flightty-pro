import { appContext } from 'App';
import FlightCard from 'components/FlightCard';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getFlightsFromTo } from 'services/apiService';
import { populateFlights, sumFlightsCost } from 'services/flightService';
import { Flight, SearchFlightQuery } from 'types/interfaces';
import './ResultsPage.scss';

function ResultsPage() {
  const { airlines, airports } = useContext(appContext);
  const { state } = useLocation<SearchFlightQuery>();
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    getFlightsFromTo(state.departureIata, state.arrivalIata).then(setFlights);
  }, [state]);

  if (!flights.length) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div className="search-results-page">
        <h1>Risultati ricerca</h1>
        <div className="page-header">
          <p className="search-query">TRO → VCE (1 scalo, € 3500)</p>
          <Link className="search-icon" to="/">
            🔎
          </Link>
        </div>
        <FlightCard
          flights={populateFlights(flights, airports, airlines)}
          totalPrice={sumFlightsCost(flights)}
        />
      </div>
    </div>
  );
}

export default ResultsPage;

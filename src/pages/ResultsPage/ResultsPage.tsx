import { appContext } from 'App';
import { CrazyPlanes, LoadingSpinner } from 'components';
import FlightCard from './FlightCard';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { populateFlights, sumFlightsCost, getFlightsFromTo } from 'services';
import { Flight, SearchFlightQuery } from 'types';
import './ResultsPage.scss';

function ResultsPage(): JSX.Element {
  const { airlines, airports } = useContext(appContext);
  const { state } = useLocation<SearchFlightQuery>();
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    getFlightsFromTo(state.departureIata, state.arrivalIata).then(setFlights);
  }, [state]);

  if (!flights.length) {
    return (
      <div id="results-page">
        <LoadingSpinner />
      </div>
    );
  }

  const populatedFlights = populateFlights(flights, airports, airlines);

  if (!populatedFlights.length) {
    return <Redirect to="/" />;
  }

  return (
    <div id="results-page">
      <FlightCard
        flights={populatedFlights}
        totalPrice={sumFlightsCost(flights)}
      />
      <CrazyPlanes />
    </div>
  );
}

export default ResultsPage;

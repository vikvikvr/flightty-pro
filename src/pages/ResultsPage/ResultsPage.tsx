import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

import { LoadingSpinner } from 'components';
import {
  populateFlights,
  sumFlightsCost,
  getFlightsFromTo,
  appContext,
} from 'services';
import { Flight, AirportsQuery } from 'types';
import FlightCard from './FlightCard';
import './ResultsPage.scss';

// **** Shows cheapest way to connect between 2 airports ****

function ResultsPage(): JSX.Element {
  const { airlines, airports } = useContext(appContext);
  const { state } = useLocation<AirportsQuery>();
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(makeRequestUsingFormData, [state]);

  function makeRequestUsingFormData() {
    if (state) {
      getFlightsFromTo(state.departureIata, state.arrivalIata).then(setFlights);
    }
  }

  if (!state) {
    return <Redirect to="/" />;
  }

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
    </div>
  );
}

export default ResultsPage;

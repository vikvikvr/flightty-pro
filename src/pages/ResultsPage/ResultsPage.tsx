import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

import { CrazyPlanes, LoadingSpinner } from 'components';
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
    getFlightsFromTo(state.departureIata, state.arrivalIata).then(setFlights);
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
      <CrazyPlanes />
    </div>
  );
}

export default ResultsPage;

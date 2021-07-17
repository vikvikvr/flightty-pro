import { appContext } from 'App';
import CrazyPlanes from 'components/CrazyPlanes';
import FlightCard from 'components/FlightCard';
import LoadingSpinner from 'components/LoadingSpinner';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
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
    return (
      <div className="search-results-page">
        <LoadingSpinner />
      </div>
    );
  }

  const populatedFlights = populateFlights(flights, airports, airlines);

  if (!populatedFlights.length) {
    return <Redirect to="/" />;
  }

  return (
    <div className="search-results-page">
      <FlightCard
        flights={populatedFlights}
        totalPrice={sumFlightsCost(flights)}
      />
      <CrazyPlanes />
    </div>
  );
}

export default ResultsPage;

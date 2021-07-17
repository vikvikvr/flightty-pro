import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchFlightQuery } from 'types/interfaces';
import './ResultsPage.scss';

function ResultsPage() {
  const location = useLocation<SearchFlightQuery>();

  useEffect(() => {
    console.log(location.state);
  }, [location.state]);

  return <div>results</div>;
}

export default ResultsPage;

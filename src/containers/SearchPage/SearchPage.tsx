import { appContext } from 'App';
import LoadingSpinner from 'components/LoadingSpinner';
import SearchFlightForm from 'containers/SearchFlightForm';
import React, { useContext } from 'react';
import './SearchPage.scss';

function SearchPage() {
  const { airports } = useContext(appContext);

  return (
    <div className="search-page">
      {airports.length ? <SearchFlightForm /> : <LoadingSpinner />}
    </div>
  );
}

export default SearchPage;

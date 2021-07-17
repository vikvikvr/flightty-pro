import { appContext } from 'App';
import SearchFlightForm from 'containers/SearchFlightForm';
import React, { useContext } from 'react';
import './SearchPage.scss';

function SearchPage() {
  const { airports } = useContext(appContext);

  return (
    <div className="search-page">
      {airports.length ? <SearchFlightForm /> : null}
    </div>
  );
}

export default SearchPage;

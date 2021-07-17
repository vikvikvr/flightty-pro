import { appContext } from 'App';
import SearchFlightForm from './SearchFlightForm';
import React, { useContext } from 'react';
import { bottomBanner } from 'assets/images';
import './SearchPage.scss';
import { LoadingSpinner, CrazyPlanes } from 'components';

function SearchPage() {
  const { airports } = useContext(appContext);

  return (
    <div className="search-page">
      {airports.length ? (
        <>
          <SearchFlightForm />
          <CrazyPlanes />
          <img className="bottom-banner" src={bottomBanner} alt="advertising" />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default SearchPage;

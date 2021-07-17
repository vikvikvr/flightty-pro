import { appContext } from 'App';
import LoadingSpinner from 'components/LoadingSpinner';
import SearchFlightForm from 'containers/SearchFlightForm';
import React, { useContext } from 'react';
import bottomBanner from 'assets/images/bottom-banner.jpg';
import './SearchPage.scss';
import CrazyPlanes from 'components/CrazyPlanes';

function SearchPage() {
  const { airports } = useContext(appContext);

  return (
    <div className="search-page">
      {airports.length ? (
        <>
          <CrazyPlanes />
          <SearchFlightForm />
          <img className="bottom-banner" src={bottomBanner} alt="advertising" />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default SearchPage;

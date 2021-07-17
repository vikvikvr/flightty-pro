import React, { useContext } from 'react';

import { LoadingSpinner, CrazyPlanes } from 'components';
import { bottomBanner } from 'assets';
import SearchFlightForm from './SearchFlightForm';
import { appContext } from 'App';
import './SearchPage.scss';

function SearchPage(): JSX.Element {
  const { airports } = useContext(appContext);

  return (
    <div id="search-page">
      {airports.length ? (
        <>
          <SearchFlightForm />
          <CrazyPlanes />
          <img className="banner" src={bottomBanner} alt="banner" />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default SearchPage;

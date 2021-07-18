import React, { useContext } from 'react';

import { LoadingSpinner, CrazyPlanes } from 'components';
import { bottomBanner } from 'assets';
import SearchFlightForm from './ChooseAirportsForm';
import { appContext } from 'services';
import './SearchPage.scss';

// **** Shows airports selection form ****

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

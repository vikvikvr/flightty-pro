import React, { useContext } from 'react';

import { LoadingSpinner } from 'components';
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
          <img
            className="bottom-banner"
            src={bottomBanner}
            alt="bottom banner"
          />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default SearchPage;

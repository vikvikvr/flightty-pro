import NavBar from 'components/NavBar';
import SearchFlightForm from 'containers/SearchFlightForm';
import React from 'react';
import './SearchPage.scss';

function SearchPage() {
  return (
    <div>
      <NavBar />
      <SearchFlightForm />
    </div>
  );
}

export default SearchPage;

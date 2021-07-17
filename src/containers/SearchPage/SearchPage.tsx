import { appContext } from 'App';
import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import SearchFlightForm from 'containers/SearchFlightForm';
import React, { useContext } from 'react';
import './SearchPage.scss';

function SearchPage() {
  const { airports } = useContext(appContext);

  return (
    <div className="search-page">
      <NavBar />
      {airports.length ? <SearchFlightForm /> : null}
      <img
        className="advertising"
        src="https://www.exopicmedia.com/wp-content/uploads/2019/07/21-6-19__banner-08.jpg"
        alt="advertising"
      />
      <SideBar />
      <img
        src="https://miro.medium.com/max/2000/1*31YC9s8UvFJ27bT43Ng_og.jpeg"
        className="side-banner"
        alt="side banner"
      />
    </div>
  );
}

export default SearchPage;

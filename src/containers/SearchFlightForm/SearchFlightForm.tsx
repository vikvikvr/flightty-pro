import { appContext } from 'App';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchFlightQuery } from 'types/interfaces';
import './SearchFlightForm.scss';

function SearchFlightForm() {
  const { airports } = useContext(appContext);
  const history = useHistory<SearchFlightQuery>();
  const [formData, setFormData] = useState<SearchFlightQuery>({
    arrivalIata: airports[0]?.codeIata || '',
    departureIata: airports[1]?.codeIata || '',
    maxFlights: 3,
    maxPrice: 2000,
  });

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
    history.push('/results', formData);
  }

  function handleFormChange(e: FormChangeEvent) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="search-form-container">
      <form className="search-flight-form" onSubmit={handleSearchSubmit}>
        <h1>Dove vuoi andare?</h1>
        <label htmlFor="departureIata">Partenza:</label>
        <select
          id="departureIata"
          name="departureIata"
          value={formData.departureIata}
          onChange={handleFormChange}
        >
          {airports.map((airport) => (
            <option key={airport.id} value={airport.codeIata}>
              {airport.codeIata}
            </option>
          ))}
        </select>
        <label htmlFor="arrivalIata">Arrivo:</label>
        <select
          id="arrivalIata"
          name="arrivalIata"
          value={formData.arrivalIata}
          onChange={handleFormChange}
        >
          {airports.map((airport) => (
            <option key={airport.id} value={airport.codeIata}>
              {airport.codeIata}
            </option>
          ))}
        </select>
        <div className="bottom-section">
          <div className="col">
            <label htmlFor="maxFlights">Max scali:</label>
            <input
              id="maxFlights"
              type="number"
              value={formData.maxFlights}
              name="maxFlights"
              onChange={handleFormChange}
            />
          </div>
          <div className="col">
            <label htmlFor="maxPrice">Max price:</label>
            <input
              id="maxPrice"
              type="number"
              value={formData.maxPrice}
              name="maxPrice"
              onChange={handleFormChange}
            />
          </div>
        </div>
        <input type="submit" name="submit" value="cerca voli" />
      </form>
    </div>
  );
}

type FormChangeEvent = React.ChangeEvent<HTMLSelectElement | HTMLInputElement>;

export default SearchFlightForm;

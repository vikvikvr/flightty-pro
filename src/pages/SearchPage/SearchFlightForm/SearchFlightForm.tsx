import { appContext } from 'App';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchFlightQuery } from 'types';
import './SearchFlightForm.scss';

function SearchFlightForm(): JSX.Element {
  const { airports } = useContext(appContext);
  const history = useHistory<SearchFlightQuery>();
  const [formData, setFormData] = useState<SearchFlightQuery>({
    arrivalIata: airports[0].codeIata,
    departureIata: airports[1].codeIata,
  });

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    history.push('/results', formData);
  }

  function handleFormChange(e: FormChangeEvent): void {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="search-form-container">
      <form className="search-flight-form" onSubmit={handleSearchSubmit}>
        <h2>Dove vuoi andare?</h2>
        <p className="subtitle">Nuove e fantastiche mete ti attendono...</p>
        <div className="middle-section">
          <label htmlFor="departureIata">Partenza</label>
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
          <label htmlFor="arrivalIata">Arrivo</label>
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
        </div>
        <input
          className="submit-button"
          type="submit"
          name="submit"
          value="cerca voli"
        />
      </form>
    </div>
  );
}

type FormChangeEvent = React.ChangeEvent<HTMLSelectElement | HTMLInputElement>;

export default SearchFlightForm;

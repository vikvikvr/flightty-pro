import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { appContext } from 'services';
import { AirportsQuery } from 'types';
import './ChooseAirportsForm.scss';

// **** Allows to choose departure and arrival airports ****

function ChooseAirportsForm(): JSX.Element {
  const { airports } = useContext(appContext);
  const history = useHistory<AirportsQuery>();
  const [formData, setFormData] = useState<AirportsQuery>({
    arrivalIata: airports[0].codeIata,
    departureIata: airports[1].codeIata,
  });

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    // use location state to share form data between screens
    history.push('/results', formData);
  }

  function handleFormChange(e: FormChangeEvent): void {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div id="form-container">
      <form onSubmit={handleSearchSubmit}>
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

export default ChooseAirportsForm;

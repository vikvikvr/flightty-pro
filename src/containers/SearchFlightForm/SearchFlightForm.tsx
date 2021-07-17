import React, { useState } from 'react';
import { Airport } from 'types/interfaces';
import './SearchFlightForm.scss';

interface Props {
  airports: Airport[];
}

interface State {
  departureId: number;
  arrivalId: number;
  maxFlights: number;
  maxPrice: number;
}

function SearchFlightForm({ airports }: Props) {
  const [formData, setFormData] = useState<State>({
    arrivalId: 1,
    departureId: 2,
    maxFlights: 3,
    maxPrice: 2000,
  });

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
  }

  function handleFormChange(e: FormChangeEvent) {
    setFormData({
      ...formData,
      [e.target.name]: parseFloat(e.target.value),
    });
  }

  return (
    <div className="search-form-container">
      <form className="search-flight-form" onSubmit={handleSearchSubmit}>
        <h1>Dove vuoi andare?</h1>
        <label htmlFor="departureId">Partenza:</label>
        <select
          id="departureId"
          name="departureId"
          value={formData.departureId}
          onChange={handleFormChange}
        >
          {airports.map((airport) => (
            <option key={airport.id} value={airport.id}>
              {airport.codeIata}
            </option>
          ))}
        </select>
        <label htmlFor="arrivalId">Arrivo:</label>
        <select
          id="arrivalId"
          name="arrivalId"
          value={formData.arrivalId}
          onChange={handleFormChange}
        >
          {airports.map((airport) => (
            <option key={airport.id} value={airport.id}>
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

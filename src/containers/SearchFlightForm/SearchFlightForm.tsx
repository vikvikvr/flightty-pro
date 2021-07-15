import React from 'react';
import './SearchFlightForm.scss';

function SearchFlightForm() {
  return (
    <form>
      <h1>Dove vuoi andare?</h1>
      <label htmlFor="departure">Partenza:</label>
      <select id="departure" name="departure">
        <option value="1">Amsterdam</option>
        <option value="2">Buenos Aires</option>
        <option value="3">Delhi</option>
      </select>
      <label htmlFor="arrival">Arrivo:</label>
      <select id="arrival" name="arrival">
        <option value="1">Amsterdam</option>
        <option value="2">Buenos Aires</option>
        <option value="3">Delhi</option>
      </select>
      <label htmlFor="max-flights">Max scali:</label>
      <input id="max-flights" type="number" value={1} />
      <label htmlFor="max-price">Max price:</label>
      <input id="max-price" type="number" value={2_500} />
      <input type="submit" name="submit" value="cerca voli" />
    </form>
  );
}

export default SearchFlightForm;

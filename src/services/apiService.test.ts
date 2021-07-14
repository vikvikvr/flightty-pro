import { getAllFlights, getAllAirports } from './apiService';

describe('apiService', () => {
  describe('getAllFlights', () => {
    it('should give a list of all available flights', () => {
      return expect(getAllFlights()).resolves.toHaveLength(80);
    });
  });

  describe('getAllAirports', () => {
    it('should give a list of all available airports', () => {
      return expect(getAllAirports()).resolves.toHaveLength(18);
    });
  });
});

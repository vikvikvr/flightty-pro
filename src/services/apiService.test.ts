import { getAllFlights } from './apiService';

describe('apiService', () => {
  describe('getAllFlights', () => {
    it('should give a list of all available flights', () => {
      expect(getAllFlights()).toBe('mock flights');
    });
  });
});

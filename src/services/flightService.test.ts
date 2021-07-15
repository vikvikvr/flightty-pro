import { getAllPathsBetween } from './flightService';
import mockFlights from './mockFlights';

it('should find paths with only one flight', () => {
  const paths = getAllPathsBetween(1, 2, mockFlights);
  expect(paths).toHaveLength(1);
  expect(paths[0][0].id).toBe(1);
});

it('should find paths with multiple flights', () => {
  const paths = getAllPathsBetween(1, 3, mockFlights);
  expect(paths).toHaveLength(3);
  expect(paths[0][0].id).toBe(1);
  expect(paths[0][1].id).toBe(2);
  expect(paths[1][0].id).toBe(3);
  expect(paths[2][0].id).toBe(4);
});

it('should not find disconnected paths', () => {
  const paths = getAllPathsBetween(1, 4, mockFlights);
  expect(paths).toHaveLength(0);
});

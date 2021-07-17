import { createContext } from 'react';

import { AppContext } from 'types';

export const defaultAppContext: AppContext = {
  flights: [],
  airports: [],
  airlines: [],
};

export const appContext = createContext<AppContext>(defaultAppContext);

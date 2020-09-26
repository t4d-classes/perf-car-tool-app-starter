import React from 'react';
import ReactDOM from 'react-dom';

import { Car } from './models/Car';

import { CarToolStoreProvider } from './contexts/CarToolStoreContext';
import { CarToolContainer } from './containers/CarToolContainer';

import './index.css';

const initialCars: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hydrid', year: 2020, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
];

ReactDOM.render(
  <CarToolStoreProvider initialCars={initialCars}>
    <CarToolContainer />
  </CarToolStoreProvider>,
  document.querySelector('#root'),
);



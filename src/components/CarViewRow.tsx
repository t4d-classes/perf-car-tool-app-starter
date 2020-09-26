import React from 'react';

import { Car } from '../models/Car';
import { CarEditButton, CarDeleteButton } from './buttons';

export type CarViewRowProps = {
  car: Car;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
};

export function CarViewRow({ car, onEditCar, onDeleteCar }: CarViewRowProps) {
  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <CarEditButton onClick={() => onEditCar(car.id)} />
        <CarDeleteButton onClick={() => onDeleteCar(car.id)} />
      </td>
    </tr>
  );
}

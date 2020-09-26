import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

import { Car } from '../models/Car';
import { CarEditButton, CarDeleteButton } from './buttons';

export type CarViewRowProps = {
  car: Car;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
};

export function CarViewRow({ car, onEditCar, onDeleteCar }: CarViewRowProps) {
  return (
    <TableRow>
      <TableCell>{car.id}</TableCell>
      <TableCell>{car.make}</TableCell>
      <TableCell>{car.model}</TableCell>
      <TableCell>{car.year}</TableCell>
      <TableCell>{car.color}</TableCell>
      <TableCell>{car.price}</TableCell>
      <TableCell>
        <CarEditButton onClick={() => onEditCar(car.id)} />
        <CarDeleteButton onClick={() => onDeleteCar(car.id)} />
      </TableCell>
    </TableRow>
  );
}

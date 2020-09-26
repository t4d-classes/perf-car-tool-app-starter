import React from 'react';

import { Car } from '../models/Car';
import { useForm } from '../hooks/useForm';
import {
  CarMakeField,
  CarModelField,
  CarYearField,
  CarColorField,
  CarPriceField,
} from './textfields';
import { CarSaveButton, CarCancelButton } from './buttons';
import { toCarFormData } from '../models/CarFormData';

export type CarEditRowProps = {
  car: Car;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
};

export function CarEditRow({
  car,
  onSaveCar,
  onCancelCar: cancelCar,
}: CarEditRowProps) {
  const [carForm, change] = useForm(toCarFormData(car));

  const saveCar = () => {
    onSaveCar({
      ...carForm,
      id: car.id,
    });
  };

  const extraProps = {
    label: 'Required',
  };

  return (
    <tr>
      <td>{car.id}</td>
      <td>
        <CarMakeField value={carForm.make} onChange={change} {...extraProps} />
      </td>
      <td>
        <CarModelField
          {...extraProps}
          value={carForm.model}
          onChange={change}
        />
      </td>
      <td>
        <CarYearField value={carForm.year} onChange={change} {...extraProps} />
      </td>
      <td>
        <CarColorField
          value={carForm.color}
          onChange={change}
          {...extraProps}
        />
      </td>
      <td>
        <CarPriceField
          value={carForm.price}
          onChange={change}
          {...extraProps}
        />
      </td>
      <td>
        <CarSaveButton onClick={saveCar} />
        <CarCancelButton onClick={cancelCar} />
      </td>
    </tr>
  );
}

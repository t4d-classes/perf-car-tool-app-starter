import React from 'react';

import { CarFormData } from '../models/CarFormData';
import { useForm } from '../hooks/useForm';

export type CarFormProps = {
  buttonText: string,
  onSubmitCar: (carForm: CarFormData) => void,
};

export function CarForm({ buttonText, onSubmitCar }: CarFormProps) {

  const [ carForm, change, resetCarForm ] = useForm<CarFormData>({
    make: '', model: '', year: 1900, color: '', price: 0,
  });

  const submitCar = () => {

    onSubmitCar({ ...carForm });
    resetCarForm();
  };

  return (
    <form>
      <label>
        Make
        <input type="text" name="make"
               value={carForm.make} onChange={change} />
      </label>
      <label>
        Model
        <input type="text" name="model"
               value={carForm.model} onChange={change} />
      </label>
      <label>
        Year
        <input type="number" name="year"
               value={carForm.year} onChange={change} />
      </label>
      <label>
        Color
        <input type="text" name="color"
               value={carForm.color} onChange={change} />
      </label>
      <label>
        Price
        <input type="text" name="price"
               value={carForm.price} onChange={change} />
      </label>
      <button type="button" onClick={submitCar}>{buttonText}</button>
    </form>
  );
};

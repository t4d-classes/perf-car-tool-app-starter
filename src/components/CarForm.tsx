import React from 'react';
import { Box } from '@material-ui/core';

import { CarFormData } from '../models/CarFormData';
import { useForm } from '../hooks/useForm';
import { useStyles } from '../components/CarForm.styles';
import { ClickableComponent } from '../models/ClickableComponent';
import {
  CarMakeField,
  CarModelField,
  CarYearField,
  CarColorField,
  CarPriceField,
} from './textfields';

export type CarFormProps = {
  submitButton: ClickableComponent;
  onSubmitCar: (carForm: CarFormData) => void;
  headerText: string;
};

export function CarForm({
  headerText,
  submitButton: SubmitButton,
  onSubmitCar,
}: CarFormProps) {
  const classes = useStyles();

  const [carForm, change, resetCarForm] = useForm<CarFormData>({
    make: '',
    model: '',
    year: NaN,
    color: '',
    price: NaN,
  });

  const submitCar = () => {
    onSubmitCar({ ...carForm });
    resetCarForm();
  };

  return (
    <Box>
      <header>
        <h2>{headerText}</h2>
      </header>
      <form noValidate autoComplete="off">
        <div className={classes.formControlRow}>
          <CarMakeField value={carForm.make} onChange={change} />
        </div>
        <div className={classes.formControlRow}>
          <CarModelField value={carForm.model} onChange={change} />
        </div>
        <div className={classes.formControlRow}>
          <CarYearField value={carForm.year} onChange={change} />
        </div>
        <div className={classes.formControlRow}>
          <CarColorField value={carForm.color} onChange={change} />
        </div>
        <div className={classes.formControlRow}>
          <CarPriceField value={carForm.price} onChange={change} />
        </div>
        <div className={classes.formControlRow}>
          <SubmitButton onClick={submitCar} />
        </div>
      </form>
    </Box>
  );
}

CarForm.defaultProps = {
  headerText: 'Car Form',
};

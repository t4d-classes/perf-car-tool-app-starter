import React from 'react';

import { CarToolStore } from '../models/CarToolStore';
import { CarToolLayout } from './CarToolLayout';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { CarAddButton } from './buttons';

export type CarToolProps = CarToolStore;

export function CarTool(props: CarToolProps) {
  const {
    sortedCars,
    editCarId,
    carsSort,
    addCar,
    saveCar,
    deleteCar,
    sortCars,
    editCar,
    cancelCar,
  } = props;

  return (
    <CarToolLayout>
      <>
        <CarTable
          cars={sortedCars}
          carsSort={carsSort}
          editCarId={editCarId}
          onEditCar={editCar}
          onDeleteCar={deleteCar}
          onSaveCar={saveCar}
          onCancelCar={cancelCar}
          onSortCars={sortCars}
        />
        <CarForm submitButton={CarAddButton} onSubmitCar={addCar} />
      </>
    </CarToolLayout>
  );
}

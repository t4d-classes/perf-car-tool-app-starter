import React, { useState, useCallback } from 'react';

import { CarToolStore } from '../models/CarToolStore';

import { CarToolLayout } from './CarToolLayout';


import { Car } from '../models/Car';
import { CarsSort } from '../models/CarsSort';
// import { ToolHeader } from './ToolHeader';
import { ToolHeaderMemo as ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export type CarToolProps = CarToolStore;

export function CarTool(props: CarToolProps) {

  const {
    sortedCars, editCarId, carsSort,
    addCar, saveCar, deleteCar, sortCars, editCar, cancelCar,
  } = props;

  return (
    <CarToolLayout>
      <>
        <CarTable cars={sortedCars} carsSort={carsSort} editCarId={editCarId}
                  onEditCar={editCar} onDeleteCar={deleteCar}
                  onSaveCar={saveCar} onCancelCar={cancelCar}
                  onSortCars={sortCars} />
        <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      </>
    </CarToolLayout>
  );
}
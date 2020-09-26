import { useState } from 'react';

import { Car } from '../models/Car';
import { CarsSort, SORT_ASC, SORT_DESC  } from '../models/CarsSort';
import { CarFormData } from '../models/CarFormData';
import { CarToolStore } from '../models/CarToolStore';
import { useList } from '../hooks/useList';

const sortedCars = (cars: Car[], carsSort: CarsSort) => {

  return cars.concat().sort( (a: Car, b: Car) => {

    const left = String(a[carsSort.col]).toUpperCase();
    const right = String(b[carsSort.col]).toUpperCase();

    if (left < right) {
      return carsSort.dir === SORT_ASC ? -1 : 1;
    } else if (left > right) {
      return carsSort.dir === SORT_ASC ? 1 : -1;
    } else {
      return 0;
    }
  });
}

type UseCarToolStore = (initialCars: Car[]) => CarToolStore;

export const useCarToolStore: UseCarToolStore = (initialCars) => {

  const [ carsSort, setCarsSort ] = useState<CarsSort>({
    col: 'id',
    dir: SORT_ASC,
  });
  const [ editCarId, setEditCarId ] = useState(-1);
  const [ cars, appendCar, replaceCar, removeCar ] =
    useList<Car>([ ...initialCars ]);

  const addCar = (carForm: CarFormData) => {
    appendCar(carForm);
    setEditCarId(-1);
  };

  const saveCar = (car: Car) => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = (carId: number) => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  const sortCars = (col: keyof Car) => {

    if (col === carsSort.col) {
      setCarsSort({
        col, dir: SORT_ASC === carsSort.dir ? SORT_DESC : SORT_ASC,
      })
    } else {
      setCarsSort({
        col, dir: SORT_ASC,
      });
    }

  };

  return {
    sortedCars: sortedCars(cars, carsSort),
    editCarId,
    carsSort,
    addCar,
    saveCar,
    deleteCar,
    editCar: setEditCarId,
    cancelCar,
    sortCars,
  };


}
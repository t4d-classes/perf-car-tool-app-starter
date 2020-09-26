import { Car } from './Car';
import { CarsSort } from './CarsSort';
import { CarFormData } from './CarFormData';

export type CarToolState = {
  sortedCars: Car[],
  editCarId: number,
  carsSort: CarsSort,
}

export type CarToolActions = {
  addCar: (carForm: CarFormData) => void,
  saveCar: (car: Car) => void,
  deleteCar: (carId: number) => void,
  editCar: (carId: number) => void,
  cancelCar: () => void,
  sortCars: (col: keyof Car) => void,
}

export type CarToolStore = CarToolState & CarToolActions;
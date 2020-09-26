import React from 'react';
import { TableCell } from '@material-ui/core';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';

import { CarsSort, SORT_ASC } from '../models/CarsSort';
import { CarKeys } from '../models/Car';

export type ColHeaderProps = {
  carsSort: CarsSort;
  col: CarKeys;
  caption: string;
  onClick: (col: CarKeys) => void;
};

export function ColHeader(props: ColHeaderProps) {
  const { carsSort, col, caption, onClick } = props;

  return (
    <TableCell onClick={() => onClick(col)}>
      {caption}
      {carsSort.col === col && (
        <span>
          {carsSort.dir === SORT_ASC ? <ArrowDownward /> : <ArrowUpward />}
        </span>
      )}
    </TableCell>
  );
}

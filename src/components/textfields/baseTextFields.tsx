import React from 'react';
import { TextField } from '@material-ui/core';

import { getErrorProps, nanToString } from './helpers';

export type BaseTextFieldProps = {
  errorMessage?: string;
  [propName: string]: any;
};

export function BaseTextField({ errorMessage, ...props }: BaseTextFieldProps) {
  return (
    <TextField variant="outlined" {...getErrorProps(errorMessage)} {...props} />
  );
}

export function BaseRequiredTextField(props: BaseTextFieldProps) {
  return <BaseTextField required {...props} />;
}

export type BaseNumericTextFieldProps = {
  value: number;
} & BaseTextFieldProps;

export function BaseNumericTextField({
  value,
  ...props
}: BaseNumericTextFieldProps) {
  return <BaseTextField value={nanToString(value)} {...props} />;
}

export function BaseRequiredNumericTextField(props: BaseNumericTextFieldProps) {
  return <BaseNumericTextField required {...props} />;
}

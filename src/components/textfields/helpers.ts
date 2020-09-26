import { isNil } from 'lodash';

export type ErrorProps = {
  error: boolean;
  helperText: string;
};

export function getErrorProps(errorMessage?: string): ErrorProps {
  let errorProps = {} as ErrorProps;

  if (!isNil(errorMessage)) {
    errorProps = {
      error: true,
      helperText: errorMessage,
    };
  }

  return errorProps;
}

export const nanToString = (value: number) => (isNaN(value) ? '' : String(value));

import React from 'react';

export type ToolHeaderProps = {
  headerText: string;
};

export function ToolHeader({ headerText }: ToolHeaderProps) {
  return (
    <header>
      <h1>{headerText}</h1>
    </header>
  );
}

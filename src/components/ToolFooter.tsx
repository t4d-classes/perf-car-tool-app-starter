import React from 'react';

export type ToolFooterProps = {
  companyName: string,
};

export function ToolFooter(props: ToolFooterProps) {

  return(
    <footer>
      <small>&copy; {new Date().getFullYear()} {props.companyName}</small>
    </footer>
  );

}

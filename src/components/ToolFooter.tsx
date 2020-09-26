import React from 'react';

export type ToolFooterProps = {
  companyName: string;
};

export function ToolFooter({ companyName }: ToolFooterProps) {
  return (
    <footer>
      <small>
        &copy; {new Date().getFullYear()} {companyName}
      </small>
    </footer>
  );
}

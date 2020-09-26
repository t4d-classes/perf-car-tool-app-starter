import React, { ReactNode } from 'react';
import Grid from '@material-ui/core/Grid';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';

export type CarToolLayoutProps = {
  children: ReactNode,
};

export function CarToolLayout({ children }: CarToolLayoutProps) {

  function CarToolHeader() { return <ToolHeader headerText="Car Tool" />; }
  function CarToolFooter() { return <ToolFooter companyName="A Cool Company, Inc." />; }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} component={CarToolHeader} />
      <Grid item xs={12}>
        {children}
      </Grid>
      <Grid item xs={12} component={CarToolFooter} />
    </Grid>
  );

}
import React, { ReactNode } from 'react';
import { Grid, Container } from '@material-ui/core';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';

export type CarToolLayoutProps = {
  children: ReactNode;
};

export function CarToolLayout({ children }: CarToolLayoutProps) {
  function CarToolHeader() {
    return <ToolHeader headerText="Car Tool" />;
  }
  function CarToolFooter() {
    return <ToolFooter companyName="A Cool Company, Inc." />;
  }

  return (
    <Container>
      <Grid>
        <Grid item component={CarToolHeader} />
        <Grid item>{children}</Grid>
        <Grid item component={CarToolFooter} />
      </Grid>
    </Container>
  );
}

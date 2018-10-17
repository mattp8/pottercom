import React from 'react';
import { Box } from 'rebass';

// Container forces max-widths on elements
const Container = props => (
  <Box
    {...props}
    mx="auto"
    css={{
      maxWidth: '1024px',
      textAlign: 'center',
    }}
  />
);

export { Container };

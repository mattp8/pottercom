import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';

// Container forces max-widths on elements
const Container = styled(Box)`
  max-width: 1024px;
  texta-lign: center;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 0 32px;
  }
`;

export { Container };

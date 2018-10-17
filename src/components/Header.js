import PropTypes from 'prop-types';
import React from 'react';
import { Box, Image, Text } from 'rebass';

const Header = ({ logo, ...props }) => (
  <div>
    <Image src={logo} width="200px" alt="pottercom" mt={4} />
    <Text
      color="black"
      fontWeight="500"
      fontSize={0}
      css={{ position: 'relative', left: '12px', top: '-12px' }}
      my={0}
    >
      Fancy dress for your Intercom
    </Text>
  </div>
);

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;

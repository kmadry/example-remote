import React from 'react';
import _ from 'lodash';

const Header = () => {
  return (
    <footer>
      Remote - header
      <p>
        Lodash v - {_.VERSION}
      </p>
    </footer>
  );
}

export default Header;

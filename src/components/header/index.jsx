import React from 'react';
import _ from 'lodash';
import '../../MuiClassNameSetup';

const Header = () => { 
  return (
    <footer>
      <p>
        Remote - header - Lodash v - {_.VERSION}
      </p>
    </footer>
  );
}

export default Header;

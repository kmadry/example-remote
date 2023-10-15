import React from 'react';
import Button from '@mui/material/Button';
import _ from 'lodash';
import '../../MuiClassNameSetup';

const Header = () => { 
  return (
    <footer>
      <Button variant="contained">Klik - example-remote</Button>   
      Remote - header
      <p>
        Lodash v - {_.VERSION}
      </p>
    </footer>
  );
}

export default Header;

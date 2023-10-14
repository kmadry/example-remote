import React, {useState} from 'react';

const Clicker = ({hostState, setHostState}) => {
  const [localState, setLocalState] = useState('initial');
  return (
    <footer>
      <p>hostState: {hostState}</p>
      <p>localState: {localState}</p>
      <button onClick={() => setHostState('clicked')}>Change host state</button>
      <button onClick={() => setLocalState('clicked')}>Change local state</button>
    </footer>
  );
}

export default Clicker;

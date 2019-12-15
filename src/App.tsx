import React from 'react';
import { Provider } from 'mobx-react';
import stores from './stores';

const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <div>It works !</div>
    </Provider>
  );
}

export default App;

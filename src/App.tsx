import React from 'react';
import { Provider } from 'mobx-react';
import stores from './stores';
import { Weather } from './modules/Weather/components/Weather.component';

const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <Weather />
    </Provider>
  );
}

export default App;

import React from 'react';
import { Provider } from 'mobx-react';
import stores from './stores';
import { WeatherContainer } from './modules/Weather/containers/Weather.container';

const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <WeatherContainer />
    </Provider>
  );
}

export default App;

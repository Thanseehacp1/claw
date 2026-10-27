import React, {useState} from 'react';
import {PaperProvider} from 'react-native-paper';
import {lightTheme} from './src/config/themes/colors';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';

import Main from './Main';
import {client} from './src/config/config';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={theme}>
            <NavigationContainer>
              <Main />
            </NavigationContainer>
          </PaperProvider>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

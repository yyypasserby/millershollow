import React from 'react';
import FlashMessage from 'react-native-flash-message';

import MHSafeAreaView from './src/components/MHSafeAreaView';
import MainView from './src/MainView';

class App extends React.Component {
  render() {
    return (
      <MHSafeAreaView>
        <FlashMessage position='top' />
        <MainView />
      </MHSafeAreaView>
    );
  }
}

export default App;

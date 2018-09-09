import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {
  Route,
} from 'react-router-native';

import {
  COLOR_FONT_PRIMARY,
  COLOR_PRIMARY,
} from './Constants';

import GameListView from './components/GameListView';

class MainView extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={styles.header}>Miller's Hollow</Text>
        <FlashMessage position='top' />
        <Route exact path='/' component={GameListView} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    backgroundColor: COLOR_PRIMARY,
    color: COLOR_FONT_PRIMARY,
    fontSize: 24,
    padding: 10,
  },
});

export default MainView;

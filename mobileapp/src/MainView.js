import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {
  Route,
} from 'react-router-native';

import {
  COLOR_BACKGROUND,
  COLOR_FONT_PRIMARY,
  COLOR_PRIMARY,
} from './Constants';

import BottomBar from './components/BottomBar';
import AccountView from './components/AccountView';
import CreateGameView from './components/CreateGameView';
import GameListView from './components/GameListView';

const TABS = [
  {
    title: 'Game',
    path: '/',
  },
  {
    title: 'Create Game',
    path: '/createGame',
  },
  {
    title: 'Account',
    path: '/account',
  },
];

class MainView extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlashMessage position='top' />
        <View style={styles.tabView}>
          <Route exact path={TABS[0].path} component={GameListView} />
          <Route path={TABS[1].path} component={CreateGameView} />
          <Route path={TABS[2].path} component={AccountView} />
        </View>
        <BottomBar style={styles.bottomBar} tabs={TABS}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_BACKGROUND,
    flex: 1,
  },
  header: {
    backgroundColor: COLOR_PRIMARY,
    color: COLOR_FONT_PRIMARY,
    fontSize: 24,
    padding: 10,
  },
  tabView: {
    flex: 1,
  },
});

export default MainView;

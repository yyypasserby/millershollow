import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {
  Route,
  Switch,
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
import MessageView from './components/MessageView';
import NotificationView from './components/NotificationView';

const TABS = [
  {
    title: 'Game',
    path: '/',
    icon: {
      name: 'gamepad',
    },
  },
  {
    title: 'Message',
    path: '/message',
    icon: {
      name: 'comments',
    },
  },
  {
    title: 'Create Game',
    path: '/createGame',
    icon: {
      name: 'plus-circle',
    },
  },
  {
    title: 'Notification',
    path: '/notification',
    icon: {
      name: 'bell',
    },
  },
  {
    title: 'Account',
    path: '/account',
    icon: {
      name: 'user',
    },
  },
];

class MainView extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlashMessage position='top' />
        <View style={styles.tabView}>
          <Switch>
            <Route exact path={TABS[0].path} component={GameListView} />
            <Route path={TABS[1].path} component={MessageView} />
            <Route path={TABS[2].path} component={CreateGameView} />
            <Route path={TABS[3].path} component={NotificationView} />
            <Route path={TABS[4].path} component={AccountView} />
          </Switch>
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

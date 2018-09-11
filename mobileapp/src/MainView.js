import React from 'react';
import {
  Platform,
  StatusBar,
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
import MHSafeAreaView from './components/MHSafeAreaView';

const TABS = [
  {
    icon: {
      name: 'gamepad',
    },
    path: '/',
    title: 'Game',
    type: 'link',
  },
  {
    icon: {
      name: 'comments',
    },
    path: '/message',
    title: 'Message',
    type: 'link',
  },
  {
    icon: {
      name: 'plus-circle',
    },
    path: '/createGame',
    title: 'Create Game',
    type: 'cta',
  },
  {
    icon: {
      name: 'bell',
    },
    path: '/notification',
    title: 'Notification',
    type: 'link',
  },
  {
    icon: {
      name: 'user',
    },
    path: '/account',
    title: 'Account',
    type: 'link',
  },
];

class MainView extends React.Component {
  state = {
    createGameViewVisible: false,
  }

  render() {
    return (
      <MHSafeAreaView>
        <FlashMessage position='top' />
        <View style={styles.tabView}>
          <Switch>
            <Route exact path={TABS[0].path} component={GameListView} />
            <Route path={TABS[1].path} component={MessageView} />
            <Route path={TABS[3].path} component={NotificationView} />
            <Route path={TABS[4].path} component={AccountView} />
          </Switch>
        </View>
        <CreateGameView
          onClose={() => this._toggleCreateGameView(false)}
          visible={this.state.createGameViewVisible}
        />
        <BottomBar
          style={styles.bottomBar}
          tabs={TABS}
          onCTAPress={() => this._toggleCreateGameView(true)}
        />
      </MHSafeAreaView>
    );
  }

  _toggleCreateGameView = (visible) => {
    this.setState({createGameViewVisible: visible});
  };
}

const styles = StyleSheet.create({
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

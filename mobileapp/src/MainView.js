import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  Icon,
} from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';

import {
  COLOR_BACKGROUND,
  COLOR_FONT_PRIMARY,
  COLOR_PRIMARY,
} from './Constants';

import AccountView from './components/AccountView';
import CreateGameView from './components/CreateGameView';
import GameListView from './components/GameListView';
import MessageView from './components/MessageView';
import NotificationView from './components/NotificationView';

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

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLOR_PRIMARY,
    color: COLOR_FONT_PRIMARY,
    fontSize: 24,
    padding: 10,
  },
});

export default createBottomTabNavigator({
  Game: {
    path: '/gamelist',
    screen: GameListView,
    navigationOptions: () => ({
      title: 'Game',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type='font-awesome'
          name='gamepad'
          color={tintColor}
        />
      )
    }),
  },
  Message: {
    path: '/message',
    screen: MessageView,
    navigationOptions: () => ({
      title: 'Message',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type='font-awesome'
          name='comments'
          color={tintColor}
        />
      )
    }),
  },
  CreateGame: {
    path: '/createGame',
    screen: CreateGameView,
    navigationOptions: () => ({
      title: 'Create',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type='font-awesome'
          name='plus-circle'
          color={tintColor}
        />
      )
    }),
  },
  Notification: {
    path: '/notification',
    screen: NotificationView,
    navigationOptions: () => ({
      title: 'Notification',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type='font-awesome'
          name='bell'
          color={tintColor}
        />
      )
    }),
  },
  Account: {
    path: '/account',
    screen: AccountView,
    navigationOptions: () => ({
      title: 'Account',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type='font-awesome'
          name='user'
          color={tintColor}
        />
      )
    }),
  },
});

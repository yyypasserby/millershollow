import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';

import GameList from './GameList';
import environment from '../Environment';

const GameListViewQuery = graphql`
  query GameListViewQuery {
    viewer {
      ...GameList_viewer
    }
  }
`;

class GameListView extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={GameListViewQuery}
        render={({error, props}) => {
          if (error) {
            return <Text>Error loading Game List: {error.message}</Text>;
          } else if (props) {
            return <GameList viewer={props.viewer} />;
          }
          return <ActivityIndicator style={styles.indicator} />;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default GameListView;

import React from 'react';
import {
  FlatList,
  ScrollView,
} from 'react-native';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';

import Game from './Game';

class GameList extends React.Component {
  render() {
    const games = this.props.viewer.allGames.edges.map(({ node }, index) => ({
      key: index + '',
      node,
    }));
    return (
      <ScrollView>
        <FlatList
          data={games}
          renderItem={({ item }) => <Game game={item.node} />}
        />
      </ScrollView>
    );
  }
}

export default createFragmentContainer(GameList, graphql`
  fragment GameList_viewer on Viewer {
    allGames(last: 100, orderBy: createdAt_DESC) @connection(key: "GameList_allGames", filters: []) {
      edges {
        node {
          ...Game_game
        }
      }
    }
  }
`);

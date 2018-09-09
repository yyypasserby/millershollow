import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';

class Game extends React.Component {
  render() {
    const {
      createdAt,
      isPublic,
      name,
    } = this.props.game;
    return (
      <TouchableOpacity>
        <Text>
          {name}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default createFragmentContainer(Game, graphql`
  fragment Game_game on Game {
    createdAt
    id
    isPublic
    name
  }
`);

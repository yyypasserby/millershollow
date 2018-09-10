import React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class CreateGameView extends React.Component {
  state = {
    bounceValue: new Animated.Value(100),
  }

  componentDidMount() {
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0,
        velocity: 3,
        tension: 2,
        friction: 8,
      }
    ).start();
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.subView,
          {transform: [{
            translateY: this.state.bounceValue
          }]}
        ]}>
        <Text>CreateGameView</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  subView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    height: 100,
  },
});

export default CreateGameView;

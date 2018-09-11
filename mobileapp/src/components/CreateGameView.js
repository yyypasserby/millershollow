import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MHSafeAreaView from './MHSafeAreaView';

class CreateGameView extends React.Component {
  render() {
    return (
      <Modal
        animationType='slide'
        visible={this.props.visible}>
        <MHSafeAreaView>
          <Text>CreateGameView</Text>
          <TouchableOpacity
            onPress={this.props.onClose}>
            <Text>Close modal</Text>
          </TouchableOpacity>
        </MHSafeAreaView>
      </Modal>
    );
  }
}

export default CreateGameView;

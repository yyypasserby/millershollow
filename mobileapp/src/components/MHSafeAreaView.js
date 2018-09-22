import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {
  COLOR_BACKGROUND,
} from '../Constants';

class MHSafeAreaView extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.children}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_BACKGROUND,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})

export default MHSafeAreaView;

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Link,
} from 'react-router-native';

import {
  COLOR_FONT_PRIMARY,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
} from '../Constants';

class BottomBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.tabs.map(tab =>
          <Link
            key={tab.title}
            style={styles.bottomBarItem}
            to={tab.path}
            underlayColor={COLOR_SECONDARY}>
            <Text style={styles.text}>{tab.title}</Text>
          </Link>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_PRIMARY,
    flexDirection: 'row',
    height: 48,
    justifyContent: 'space-around',
  },
  bottomBarItem: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: COLOR_FONT_PRIMARY,
  }
});

export default BottomBar;

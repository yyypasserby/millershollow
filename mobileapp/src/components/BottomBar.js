import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Icon,
} from 'react-native-elements';

import {
  COLOR_FONT_PRIMARY,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
} from '../Constants';

class BottomBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.tabs.map(tab => {
          let onPress;
          if (tab.type === 'link') {
            onPress = () => this.props.history.replace(tab.path);
          } else if (tab.type === 'cta') {
            onPress = this.props.onCTAPress;
          }
          return (
            <TouchableOpacity
              key={tab.title}
              onPress={onPress}
              style={styles.bottomBarItem}>
              <View>
                <Icon
                  type='font-awesome'
                  name={tab.icon.name}
                  color={COLOR_FONT_PRIMARY}
                />
                <Text style={styles.text}>{tab.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
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
    fontSize: 10,
  }
});

export default withRouter(BottomBar);
